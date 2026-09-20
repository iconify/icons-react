import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6lq83bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u6lq83bxy"/>`,
		"fallback": "majesticons:view-columns",
	});
}

export default Component;
