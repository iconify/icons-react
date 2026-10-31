import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd-1klc9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd-1klc9r"/>`,
		"fallback": "coolicons:pencil-alt-bulk-round",
	});
}

export default Component;
