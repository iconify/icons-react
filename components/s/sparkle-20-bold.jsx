import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc8ay19in.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc8ay19in"/>`,
		"fallback": "energy-icons:sparkle-20-bold",
	});
}

export default Component;
