import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r5m2bbppl.css';
import '../../css/u/u1270i3fx.css';
import '../../css/t/tmwyu4bav.css';
import '../../css/z/zmd3boisj.css';
import '../../css/v/vl1p2wb1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="r5m2bbppl"/><path class="u1270i3fx"/><path class="tmwyu4bav"/><path class="zmd3boisj"/><path class="vl1p2wb1q"/></g>`,
		"fallback": "catppuccin:marko",
	});
}

export default Component;
