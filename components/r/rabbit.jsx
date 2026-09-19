import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yncrqfcru.css';
import '../../css/y/ymqi1-bqp.css';
import '../../css/q/qkzx3-bvi.css';
import '../../css/m/mgnyrhbia.css';
import '../../css/z/zacj-3fii.css';
import '../../css/q/q6h5qf-el.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="yncrqfcru"/><circle class="ymqi1-bqp"/><circle class="qkzx3-bvi"/><circle class="mgnyrhbia"/><path class="zacj-3fii"/><path class="q6h5qf-el"/></g>`,
		"fallback": "icon-park:rabbit",
	});
}

export default Component;
