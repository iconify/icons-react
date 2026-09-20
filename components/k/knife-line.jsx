import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5g5nccdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5g5nccdj"/>`,
		"fallback": "mingcute:knife-line",
	});
}

export default Component;
