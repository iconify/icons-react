import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3hwew7vt.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3hwew7vt"/>`,
		"fallback": "fa-solid:project-diagram",
	});
}

export default Component;
