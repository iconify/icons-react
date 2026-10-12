import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzyh-7hlf.css';
import '../../css/e/e22sii81u.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/h/hpal0bc4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qzyh-7hlf"/><path class="e22sii81u"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="hpal0bc4i"/></g>`,
		"fallback": "andrsrxn:money-in",
	});
}

export default Component;
