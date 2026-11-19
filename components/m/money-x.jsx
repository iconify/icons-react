import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aajxl_bmj.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/w/wpq9tsb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aajxl_bmj"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="wpq9tsb8p"/></g>`,
		"fallback": "andrsrxn:money-x",
	});
}

export default Component;
