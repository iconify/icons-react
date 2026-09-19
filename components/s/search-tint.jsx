import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uuv-2mbxf.css';
import '../../css/i/ioy40e8fj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uuv-2mbxf"/><path class="ioy40e8fj"/></g>`,
		"fallback": "glyphs:search-tint",
	});
}

export default Component;
