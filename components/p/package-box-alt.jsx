import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/w6shkmb_o.css';
import '../../css/k/kh3gclbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="w6shkmb_o"/><rect class="kh3gclbgo"/></g>`,
		"fallback": "lets-icons:package-box-alt",
	});
}

export default Component;
