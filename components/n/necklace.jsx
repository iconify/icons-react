import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ucne17b7x.css';
import '../../css/o/op6p268fa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ucne17b7x"/><path class="op6p268fa"/></g>`,
		"fallback": "streamline:necklace",
	});
}

export default Component;
