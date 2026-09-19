import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nndam4mwm.css';
import '../../css/i/ifaxg67dv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nndam4mwm"/><path class="ifaxg67dv"/></g>`,
		"fallback": "glyphs:union",
	});
}

export default Component;
