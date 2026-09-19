import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mwjqgf-_o.css';
import '../../css/f/fi_moqbpl.css';
import '../../css/n/n-snv_i1x.css';
import '../../css/i/i7_ys9b1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="mwjqgf-_o"/><path class="fi_moqbpl"/><circle class="n-snv_i1x"/><path class="i7_ys9b1d"/></g>`,
		"fallback": "icon-park-solid:radio-one",
	});
}

export default Component;
