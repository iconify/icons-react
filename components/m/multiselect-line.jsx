import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct9mjbcog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct9mjbcog"/>`,
		"fallback": "mingcute:multiselect-line",
	});
}

export default Component;
