import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9p5z8bbl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9p5z8bbl"/>`,
		"fallback": "lsicon:view-off-outline",
	});
}

export default Component;
