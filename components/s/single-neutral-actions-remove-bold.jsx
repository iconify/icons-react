import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trxr8zl8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trxr8zl8z"/>`,
		"fallback": "streamline-ultimate:single-neutral-actions-remove-bold",
	});
}

export default Component;
