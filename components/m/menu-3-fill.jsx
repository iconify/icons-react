import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9ax2lb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9ax2lb6r"/>`,
		"fallback": "ri:menu-3-fill",
	});
}

export default Component;
