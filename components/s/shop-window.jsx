import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdzwg8bxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdzwg8bxz"/>`,
		"fallback": "bi:shop-window",
	});
}

export default Component;
