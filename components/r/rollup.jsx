import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uchn-5q-t.css';
import '../../css/j/jwg6sgb-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="uchn-5q-t"/><path class="jwg6sgb-j"/></g>`,
		"fallback": "catppuccin:rollup",
	});
}

export default Component;
