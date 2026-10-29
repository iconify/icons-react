import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/j/j4e6xnbta.css';
import '../../css/i/i8cd1hbva.css';
import '../../css/l/l833663_k.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="j4e6xnbta"/><path class="i8cd1hbva"/><path class="l833663_k wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`,
		"fallback": "withicons-sticker:square-minus",
	});
}

export default Component;
