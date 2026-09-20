import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f99l4bb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f99l4bb4c"/>`,
		"fallback": "thesvg-color:ublock-origin",
	});
}

export default Component;
