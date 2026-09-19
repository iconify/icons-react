import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzn2jab7h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzn2jab7h"/>`,
		"fallback": "devicon-plain:vault-wordmark",
	});
}

export default Component;
