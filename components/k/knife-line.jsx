import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l33upq_ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l33upq_ln"/>`,
		"fallback": "mingcute:knife-line",
	});
}

export default Component;
