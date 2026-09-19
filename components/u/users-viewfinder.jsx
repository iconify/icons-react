import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1ol-z16g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1ol-z16g"/>`,
		"fallback": "fa7-solid:users-viewfinder",
	});
}

export default Component;
