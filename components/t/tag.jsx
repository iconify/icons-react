import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/dxo9gcc2c.css';
import '../../css/v/vuzzcu2xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="dxo9gcc2c"/><path class="vuzzcu2xv"/></g>`,
		"fallback": "akar-icons:tag",
	});
}

export default Component;
