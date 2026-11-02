import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwod1ybtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwod1ybtg"/>`,
		"fallback": "mingcute:robot-fill",
	});
}

export default Component;
