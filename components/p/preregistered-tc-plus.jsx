import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmnvom9vl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmnvom9vl"/>`,
		"fallback": "academicons:preregistered-tc-plus",
	});
}

export default Component;
