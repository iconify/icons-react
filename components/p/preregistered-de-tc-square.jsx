import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmw0aqb3a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmw0aqb3a"/>`,
		"fallback": "academicons:preregistered-de-tc-square",
	});
}

export default Component;
