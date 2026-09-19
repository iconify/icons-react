import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6x4u0bao.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6x4u0bao"/>`,
		"fallback": "devicon:vite-wordmark",
	});
}

export default Component;
