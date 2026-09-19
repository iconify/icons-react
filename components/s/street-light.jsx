import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/un4f2vbbr.css';
import '../../css/m/m801sybhi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="un4f2vbbr"/><path class="m801sybhi"/></g>`,
		"fallback": "glyphs:street-light",
	});
}

export default Component;
