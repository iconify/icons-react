import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb6ejtbbs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb6ejtbbs"/>`,
		"fallback": "devicon-plain:reflex-wordmark",
	});
}

export default Component;
