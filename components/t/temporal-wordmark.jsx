import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/den0z5b7b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="den0z5b7b"/>`,
		"fallback": "devicon:temporal-wordmark",
	});
}

export default Component;
