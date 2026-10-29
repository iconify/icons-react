import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yqlc1pb6g.css';
import '../../css/t/tqjkkrd1u.css';
import '../../css/u/u0oyt6bbj.css';
import '../../css/l/lmskqtbkk.css';
import '../../css/d/d_k58byaf.css';
import '../../css/g/g_nw7bcew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow yqlc1pb6g"/><path class="tqjkkrd1u"/><path class="u0oyt6bbj"/><path class="lmskqtbkk"/><path class="d_k58byaf"/><path class="g_nw7bcew wm-deco"/></g>`,
		"fallback": "withicons-sticker:rose",
	});
}

export default Component;
