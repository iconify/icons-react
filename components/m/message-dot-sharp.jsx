import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcp0yebys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcp0yebys"/>`,
		"fallback": "keyline-icons:message-dot-sharp",
	});
}

export default Component;
