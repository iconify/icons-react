import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehbsi57il.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehbsi57il"/>`,
		"fallback": "devicon-plain:tailwindcss-wordmark",
	});
}

export default Component;
