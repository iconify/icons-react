import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-9k58bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-9k58bce"/>`,
		"fallback": "streamline-logos:mubi-logo-block",
	});
}

export default Component;
