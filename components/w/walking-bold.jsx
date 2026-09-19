import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbimwubjb.css';
import '../../css/x/xba_lackm.css';
import '../../css/u/u2xr8tbqj.css';
import '../../css/p/puvbpvbom.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zbimwubjb"/><path class="xba_lackm"/><path clip-rule="evenodd" class="u2xr8tbqj"/><path class="puvbpvbom"/></g>`,
		"fallback": "glyphs:walking-bold",
	});
}

export default Component;
