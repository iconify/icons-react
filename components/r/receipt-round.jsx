import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8zqm8bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8zqm8bof"/>`,
		"fallback": "coolicons:receipt-round",
	});
}

export default Component;
