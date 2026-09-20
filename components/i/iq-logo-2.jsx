import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1nfedbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1nfedbkk"/>`,
		"fallback": "streamline-logos:iq-logo-2",
	});
}

export default Component;
