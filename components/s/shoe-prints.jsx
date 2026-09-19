import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdt6mmb7s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdt6mmb7s"/>`,
		"fallback": "fa7-solid:shoe-prints",
	});
}

export default Component;
