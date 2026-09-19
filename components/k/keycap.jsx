import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/torned4wc.css';
import '../../css/h/hp_7sj3uc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="torned4wc"/><path class="hp_7sj3uc"/></g>`,
		"fallback": "glyphs:keycap",
	});
}

export default Component;
