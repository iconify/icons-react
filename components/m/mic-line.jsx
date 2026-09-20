import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7578qc1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7578qc1t"/>`,
		"fallback": "mingcute:mic-line",
	});
}

export default Component;
