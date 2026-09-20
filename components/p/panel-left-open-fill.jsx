import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgcujh2yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgcujh2yb"/>`,
		"fallback": "keyline-icons:panel-left-open-fill",
	});
}

export default Component;
