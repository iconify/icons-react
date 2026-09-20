import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpuf4oy7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpuf4oy7f"/>`,
		"fallback": "mynaui:signal-waves",
	});
}

export default Component;
