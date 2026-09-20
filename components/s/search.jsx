import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgl9-i0zb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgl9-i0zb"/>`,
		"fallback": "octicon:search",
	});
}

export default Component;
