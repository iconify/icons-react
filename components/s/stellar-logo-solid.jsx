import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu41jfbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iu41jfbuw"/>`,
		"fallback": "streamline-logos:stellar-logo-solid",
	});
}

export default Component;
