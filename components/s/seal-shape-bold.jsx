import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li9yf9n-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li9yf9n-r"/>`,
		"fallback": "streamline-ultimate:seal-shape-bold",
	});
}

export default Component;
