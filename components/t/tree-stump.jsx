import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi60hlbog.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi60hlbog"/>`,
		"fallback": "temaki:tree-stump",
	});
}

export default Component;
