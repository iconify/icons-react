import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdq19-but.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdq19-but"/>`,
		"fallback": "energy-icons:rows-20",
	});
}

export default Component;
