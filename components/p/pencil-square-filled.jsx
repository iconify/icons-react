import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-v40p95y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-v40p95y"/>`,
		"fallback": "boxicons:pencil-square-filled",
	});
}

export default Component;
