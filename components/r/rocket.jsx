import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pqqbsibpd.css';
import '../../css/g/g2ujq98oz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pqqbsibpd"/><path class="g2ujq98oz"/></g>`,
		"fallback": "glyphs:rocket",
	});
}

export default Component;
