import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbk4gmbom.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbk4gmbom"/>`,
		"fallback": "devicon-plain:trpc-wordmark",
	});
}

export default Component;
