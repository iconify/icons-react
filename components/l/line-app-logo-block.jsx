import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js93vwb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="js93vwb4t"/>`,
		"fallback": "streamline-logos:line-app-logo-block",
	});
}

export default Component;
