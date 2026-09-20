import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q53v49bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q53v49bkn"/>`,
		"fallback": "keyline-icons:search-plus",
	});
}

export default Component;
