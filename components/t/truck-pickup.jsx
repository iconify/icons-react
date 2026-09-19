import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29lwnvax.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j29lwnvax"/>`,
		"fallback": "fa7-solid:truck-pickup",
	});
}

export default Component;
