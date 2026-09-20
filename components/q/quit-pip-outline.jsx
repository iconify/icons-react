import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns7rrrbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ns7rrrbso"/>`,
		"fallback": "solar:quit-pip-outline",
	});
}

export default Component;
