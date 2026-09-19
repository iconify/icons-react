import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3wytdb5r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3wytdb5r"/>`,
		"fallback": "devicon:ory-wordmark",
	});
}

export default Component;
