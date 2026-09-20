import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt5mbcb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt5mbcb3y"/>`,
		"fallback": "keyline-icons:wallet-fill",
	});
}

export default Component;
