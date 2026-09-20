import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xta6e_j8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xta6e_j8a"/>`,
		"fallback": "streamline-ultimate:login-key-bold",
	});
}

export default Component;
