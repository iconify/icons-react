import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o59d3w3ws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o59d3w3ws"/>`,
		"fallback": "lsicon:surface-right-outline",
	});
}

export default Component;
