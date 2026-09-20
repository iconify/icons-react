import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqhvoz1ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqhvoz1ft"/>`,
		"fallback": "ri:mark-pen-fill",
	});
}

export default Component;
