import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0-wepb-l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0-wepb-l"/>`,
		"fallback": "academicons:preregistered-tc-square",
	});
}

export default Component;
