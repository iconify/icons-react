import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu7b4brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu7b4brt"/>`,
		"fallback": "mingcute:settings-7-line",
	});
}

export default Component;
