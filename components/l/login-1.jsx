import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_xb_19lg.css';
import '../../css/h/hnif_sbez.css';
import '../../css/n/n1y6j8bff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_xb_19lg"/><path class="hnif_sbez"/><path class="n1y6j8bff"/></g>`,
		"fallback": "streamline-flex-color:login-1",
	});
}

export default Component;
