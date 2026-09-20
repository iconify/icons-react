import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx7nithiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx7nithiv"/>`,
		"fallback": "streamline-ultimate:multiple-actions-chat",
	});
}

export default Component;
