import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw5_q-bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw5_q-bxn"/>`,
		"fallback": "mingcute:notebook-2-fill",
	});
}

export default Component;
