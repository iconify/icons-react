import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlr-13enz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlr-13enz"/>`,
		"fallback": "energy-icons:unlink-20-bold",
	});
}

export default Component;
