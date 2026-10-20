import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/n/nqa4dzbwt.css';
import '../../css/m/mlbz7kuae.css';
import '../../css/h/hhw1dwpuz.css';
import '../../css/q/qtxis-yrv.css';
import '../../css/b/blppj3m_t.css';

const viewBox = {"width":467.008,"height":46.548};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><g transform="translate(0 1.292)scale(3.69565)" class="l5y23ru5w"><path class="nqa4dzbwt"/><path class="mlbz7kuae"/><ellipse class="hhw1dwpuz"/></g><path class="qtxis-yrv"/><path class="blppj3m_t"/></g>`,
		"fallback": "thesvg-color:monday-dark",
	});
}

export default Component;
