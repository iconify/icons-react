import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in8z9lbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in8z9lbzv"/>`,
		"fallback": "mingcute:playground-fill",
	});
}

export default Component;
