import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-ld4nbiy.css';
import '../../css/w/wzylqhcvh.css';
import '../../css/m/mxv273bqu.css';
import '../../css/m/m4zk6ezvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s-ld4nbiy"/><path class="wzylqhcvh"/><path clip-rule="evenodd" class="mxv273bqu"/><path clip-rule="evenodd" class="m4zk6ezvd"/></g>`,
		"fallback": "glyphs-poly:keycap",
	});
}

export default Component;
