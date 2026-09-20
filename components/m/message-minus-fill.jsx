import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj0tgpe2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj0tgpe2h"/>`,
		"fallback": "keyline-icons:message-minus-fill",
	});
}

export default Component;
