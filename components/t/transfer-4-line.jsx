import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyysn4b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyysn4b6k"/>`,
		"fallback": "mingcute:transfer-4-line",
	});
}

export default Component;
