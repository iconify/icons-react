import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jjyxsgn_q.css';
import '../../css/e/ecc6ezxwt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jjyxsgn_q"/><path class="ecc6ezxwt"/></g>`,
		"fallback": "glyphs:tree-3",
	});
}

export default Component;
