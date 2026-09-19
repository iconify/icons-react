import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/han-imcan.css';
import '../../css/o/oqf4ssgsn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="han-imcan"/><path class="oqf4ssgsn"/></g>`,
		"fallback": "glyphs:star-and-crescent",
	});
}

export default Component;
