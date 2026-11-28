import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yijnhjbkw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t33c0dq1k.css';
import '../../css/c/co8ya7bph.css';
import '../../css/m/mamjqveeu.css';
import '../../css/z/zq763cbhh.css';
import '../../css/s/sqhrwgg0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yijnhjbkw"/><g class="dt0cm9dhy primary"><path class="t33c0dq1k"/><path class="co8ya7bph"/><path class="mamjqveeu"/><path class="zq763cbhh"/><path class="sqhrwgg0l"/></g>`,
		"fallback": "iconaut:team-duo",
	});
}

export default Component;
