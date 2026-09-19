import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jm9q0em.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jm9q0em"/>`,
		"fallback": "vs:j-square",
	});
}

export default Component;
