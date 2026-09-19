import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_s4ql23r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_s4ql23r"/>`,
		"fallback": "icon-park-outline:sort-amount-down",
	});
}

export default Component;
