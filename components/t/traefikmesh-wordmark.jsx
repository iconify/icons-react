import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0evypbzs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0evypbzs"/>`,
		"fallback": "devicon-plain:traefikmesh-wordmark",
	});
}

export default Component;
