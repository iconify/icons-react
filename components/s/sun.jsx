import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/g3-k4hdfm.css';
import '../../css/a/aqhok2bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="g3-k4hdfm"/><circle class="aqhok2bbj"/></g>`,
		"fallback": "akar-icons:sun",
	});
}

export default Component;
