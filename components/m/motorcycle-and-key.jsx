import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb6ly69gp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb6ly69gp"/>`,
		"fallback": "pinhead:motorcycle-and-key",
	});
}

export default Component;
