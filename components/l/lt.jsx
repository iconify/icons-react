import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbuv__lpw.css';
import '../../css/w/w7mqji02y.css';
import '../../css/c/cimm1cbtr.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbuv__lpw"/><path class="w7mqji02y"/><path class="cimm1cbtr"/></g>`,
		"fallback": "cif:lt",
	});
}

export default Component;
