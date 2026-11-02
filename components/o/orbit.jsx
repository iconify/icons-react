import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lxtbtmbxw.css';
import '../../css/t/tjnclna9s.css';
import '../../css/v/vbbc61k-h.css';
import '../../css/w/wc3k_ibqh.css';
import '../../css/j/jt8bh8b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="lxtbtmbxw"/><path class="tjnclna9s"/><path class="vbbc61k-h"/><path class="wc3k_ibqh"/><path class="jt8bh8b_j"/></g>`,
		"fallback": "matita:orbit",
	});
}

export default Component;
