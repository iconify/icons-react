import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la_6nmkfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="la_6nmkfk"/>`,
		"fallback": "healthicons:lab-search-outline",
	});
}

export default Component;
