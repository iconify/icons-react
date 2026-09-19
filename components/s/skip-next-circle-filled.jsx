import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrizf2d8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrizf2d8n"/>`,
		"fallback": "boxicons:skip-next-circle-filled",
	});
}

export default Component;
