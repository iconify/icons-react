import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knp8ggb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knp8ggb_m"/>`,
		"fallback": "lucide:message-circle-text",
	});
}

export default Component;
