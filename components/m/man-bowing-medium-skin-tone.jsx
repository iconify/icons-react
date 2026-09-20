import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkoasrbaf.css';
import '../../css/q/qmcqdacny.css';
import '../../css/k/k0q3f-6uy.css';
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
		"content": `<path class="hkoasrbaf"/><path class="qmcqdacny"/><path class="k0q3f-6uy"/><g class="z04drlb1l"><path class="coce3_gqh"/><path class="f8s8hvbzw"/><path class="v6vmjt5rj"/></g>`,
		"fallback": "openmoji:man-bowing-medium-skin-tone",
	});
}

export default Component;
