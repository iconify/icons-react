import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/h/hwngmwbgs.css';
import '../../css/i/ihfh6lbaa.css';
import '../../css/f/f3gu8ac7c.css';
import '../../css/a/aa--g5dfu.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="hwngmwbgs"/><path class="ihfh6lbaa"/><path class="f3gu8ac7c"/><path class="aa--g5dfu"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:microphone-circle-filled",
	});
}

export default Component;
