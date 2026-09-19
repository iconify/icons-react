import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pgtng9e9x.css';
import '../../css/c/c4w_mzsby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pgtng9e9x"/><path class="c4w_mzsby"/></g>`,
		"fallback": "hugeicons:quotes",
	});
}

export default Component;
