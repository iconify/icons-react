import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7jnqub0c.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7jnqub0c"/>`,
		"fallback": "vs:t-square",
	});
}

export default Component;
