import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhtvalm5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhtvalm5y"/>`,
		"fallback": "keyline-icons:message-square-minus-fill",
	});
}

export default Component;
