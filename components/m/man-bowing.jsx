import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/k/kf91yjbld.css';
import '../../css/p/pq67zy72v.css';
import '../../css/z/z04drlb1l.css';
import '../../css/c/coce3_gqh.css';
import '../../css/f/f8s8hvbzw.css';
import '../../css/v/v6vmjt5rj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkoasrbaf"/><path class="kf91yjbld"/><path class="pq67zy72v"/><g class="z04drlb1l"><path class="coce3_gqh"/><path class="f8s8hvbzw"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:man-bowing",
	});
}

export default Component;
