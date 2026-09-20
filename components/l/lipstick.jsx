import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6gsd36ze.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6gsd36ze"/>`,
		"fallback": "temaki:lipstick",
	});
}

export default Component;
