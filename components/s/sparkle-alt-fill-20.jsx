import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz8-9gwgh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz8-9gwgh"/>`,
		"fallback": "garden:sparkle-alt-fill-20",
	});
}

export default Component;
