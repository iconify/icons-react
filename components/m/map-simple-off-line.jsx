import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6r0bob8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6r0bob8n"/>`,
		"fallback": "majesticons:map-simple-off-line",
	});
}

export default Component;
