import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt19m1bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt19m1bby"/>`,
		"fallback": "mdi:view-module",
	});
}

export default Component;
