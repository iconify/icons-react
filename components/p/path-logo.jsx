import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf1_tib4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf1_tib4i"/>`,
		"fallback": "streamline-logos:path-logo",
	});
}

export default Component;
