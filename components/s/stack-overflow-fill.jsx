import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrt0pxbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrt0pxbdo"/>`,
		"fallback": "ri:stack-overflow-fill",
	});
}

export default Component;
