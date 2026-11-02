import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtqee-t8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtqee-t8n"/>`,
		"fallback": "mingcute:shower-fill",
	});
}

export default Component;
