import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxgpq414k.css';
import '../../css/u/uf3oh5bzw.css';
import '../../css/p/p3o7oy_bq.css';
import '../../css/c/c70km2biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxgpq414k"/><path clip-rule="evenodd" class="uf3oh5bzw"/><path class="p3o7oy_bq"/><path clip-rule="evenodd" class="c70km2biw"/></g>`,
		"fallback": "griddy-icons:pig",
	});
}

export default Component;
