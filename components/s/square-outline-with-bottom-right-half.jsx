import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2pgsccln.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2pgsccln"/>`,
		"fallback": "pinhead:square-outline-with-bottom-right-half",
	});
}

export default Component;
