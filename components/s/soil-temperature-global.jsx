import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fu46p8h6t.css';
import '../../css/u/uf_ra_buw.css';
import '../../css/m/m5e-wxbmk.css';
import '../../css/m/mqvchh6fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="fu46p8h6t"/><path class="uf_ra_buw"/><path class="m5e-wxbmk"/><path class="mqvchh6fi"/></g>`,
		"fallback": "hugeicons:soil-temperature-global",
	});
}

export default Component;
