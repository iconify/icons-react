import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-3fxs8ew.css';
import '../../css/y/yhn66eyul.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-3fxs8ew"/><path class="yhn66eyul"/>`,
		"fallback": "openmoji:part-alternation-mark",
	});
}

export default Component;
