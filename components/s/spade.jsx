import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o4z1g5snb.css';
import '../../css/n/nwlabrbjy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o4z1g5snb"/><path class="nwlabrbjy"/></g>`,
		"fallback": "glyphs:spade",
	});
}

export default Component;
