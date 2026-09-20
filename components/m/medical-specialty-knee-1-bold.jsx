import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h940q7b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h940q7b8n"/>`,
		"fallback": "streamline-ultimate:medical-specialty-knee-1-bold",
	});
}

export default Component;
