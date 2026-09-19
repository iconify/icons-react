import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/exxt94z1v.css';
import '../../css/l/lbr5cjbyj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="exxt94z1v"/><path class="lbr5cjbyj"/></g>`,
		"fallback": "glyphs:mouse",
	});
}

export default Component;
