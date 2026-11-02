import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoh6psbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoh6psbwd"/>`,
		"fallback": "mingcute:stair-stepper-line",
	});
}

export default Component;
