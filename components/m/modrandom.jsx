import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q14unqb6i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q14unqb6i"/>`,
		"fallback": "fad:modrandom",
	});
}

export default Component;
