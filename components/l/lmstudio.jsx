import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg-d_6rce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg-d_6rce"/>`,
		"fallback": "simple-icons:lmstudio",
	});
}

export default Component;
