import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh7_ghbdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh7_ghbdd"/>`,
		"fallback": "lsicon:scale-outline",
	});
}

export default Component;
