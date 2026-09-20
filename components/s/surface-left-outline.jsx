import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6lbg1bym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6lbg1bym"/>`,
		"fallback": "lsicon:surface-left-outline",
	});
}

export default Component;
