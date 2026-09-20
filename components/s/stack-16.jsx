import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqxwy99bk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqxwy99bk"/>`,
		"fallback": "octicon:stack-16",
	});
}

export default Component;
