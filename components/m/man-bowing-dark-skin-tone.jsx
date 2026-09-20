import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/u/uvwcvhkbl.css';
import '../../css/v/v48w1-fzc.css';
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
		"content": `<path class="hkoasrbaf"/><path class="uvwcvhkbl"/><path class="v48w1-fzc"/><g class="z04drlb1l"><path class="coce3_gqh"/><path class="f8s8hvbzw"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:man-bowing-dark-skin-tone",
	});
}

export default Component;
