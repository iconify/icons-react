import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nob8wmdcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nob8wmdcj"/>`,
		"fallback": "si:monitor-stop-line",
	});
}

export default Component;
