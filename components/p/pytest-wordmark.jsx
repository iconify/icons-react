import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kay7cvccb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kay7cvccb"/>`,
		"fallback": "devicon-plain:pytest-wordmark",
	});
}

export default Component;
