import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr11ryb_s.css';
import '../../css/d/djm234bjt.css';
import '../../css/j/j_w1x6x7q.css';
import '../../css/y/yzvpk-bem.css';
import '../../css/v/vkkqhtozr.css';
import '../../css/y/yvdug-bjk.css';
import '../../css/z/z04drlb1l.css';
import '../../css/t/tvgmy363d.css';
import '../../css/q/q3vuqsbxi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr11ryb_s"/><path class="djm234bjt"/><path class="j_w1x6x7q"/><path class="yzvpk-bem"/><path class="vkkqhtozr"/><path class="yvdug-bjk"/><g class="z04drlb1l"><path class="tvgmy363d"/><path class="q3vuqsbxi"/></g>`,
		"fallback": "openmoji:knot",
	});
}

export default Component;
