import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1-4xhbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1-4xhbgr"/>`,
		"fallback": "solar:suspension-cross-outline",
	});
}

export default Component;
