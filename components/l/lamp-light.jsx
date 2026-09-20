import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_pv1tbov.css';
import '../../css/s/sdsnqtvsn.css';
import '../../css/c/che3vpvsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_pv1tbov"/><path class="sdsnqtvsn"/><path class="che3vpvsq"/></g>`,
		"fallback": "lets-icons:lamp-light",
	});
}

export default Component;
