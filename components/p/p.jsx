import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prou6k_-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="prou6k_-r"/>`,
		"fallback": "healthicons:p",
	});
}

export default Component;
