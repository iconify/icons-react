import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk1kz6c0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk1kz6c0d"/>`,
		"fallback": "keyline-icons:message-square-x-fill",
	});
}

export default Component;
