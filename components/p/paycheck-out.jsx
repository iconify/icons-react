import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea6vscbfj.css';
import '../../css/z/zd8_ny7zw.css';
import '../../css/z/zpov_y2yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ea6vscbfj"/><path class="zd8_ny7zw"/><path class="zpov_y2yu"/></g>`,
		"fallback": "andrsrxn:paycheck-out",
	});
}

export default Component;
