import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu9qb8bzz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu9qb8bzz"/>`,
		"fallback": "devicon:vyper-wordmark",
	});
}

export default Component;
