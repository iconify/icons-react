import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3aon7b-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3aon7b-d"/>`,
		"fallback": "pepicons-pencil:menu",
	});
}

export default Component;
