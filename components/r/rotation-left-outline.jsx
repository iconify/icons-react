import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coai96h7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coai96h7w"/>`,
		"fallback": "lsicon:rotation-left-outline",
	});
}

export default Component;
