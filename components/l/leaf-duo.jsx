import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz_eqbhss.css';
import '../../css/t/t0a56hb1v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xz_eqbhss"/><path class="t0a56hb1v"/></g>`,
		"fallback": "glyphs:leaf-duo",
	});
}

export default Component;
