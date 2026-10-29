import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdxwtybrp.css';
import '../../css/z/zg0sxcbun.css';
import '../../css/n/nn59byzyh.css';
import '../../css/u/uwmz0mb7b.css';
import '../../css/y/ypsqbk-pd.css';
import '../../css/z/zw_2fjbfr.css';
import '../../css/f/f20a1rbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdxwtybrp wm-k"/><path class="wm-k zg0sxcbun"/><path class="nn59byzyh wm-k"/><path class="uwmz0mb7b wm-shine"/><path class="wm-s ypsqbk-pd"/><path class="wm-s zw_2fjbfr"/><path class="f20a1rbcz wm-s"/></g>`,
		"fallback": "withicons-anime:phone-outgoing",
	});
}

export default Component;
