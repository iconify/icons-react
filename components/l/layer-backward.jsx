import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u8_ot7bnm.css';
import '../../css/b/b7u9enlhv.css';
import '../../css/c/c6-vowhzn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u8_ot7bnm"/><path class="b7u9enlhv"/><path class="c6-vowhzn"/></g>`,
		"fallback": "glyphs:layer-backward",
	});
}

export default Component;
