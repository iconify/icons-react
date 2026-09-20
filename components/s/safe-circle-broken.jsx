import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t_g4b6brw.css';
import '../../css/u/ul2finbnj.css';
import '../../css/a/a2-o1jt_u.css';
import '../../css/d/d6cn3zbnj.css';
import '../../css/f/fmc_3temv.css';
import '../../css/a/avgpambcj.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t_g4b6brw"/><path class="ul2finbnj"/><path class="a2-o1jt_u"/><path class="d6cn3zbnj"/><path class="fmc_3temv"/><path class="avgpambcj"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:safe-circle-broken",
	});
}

export default Component;
