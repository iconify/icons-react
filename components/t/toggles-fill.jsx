import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1m3l8py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="el1m3l8py"/>`,
		"fallback": "keyline-icons:toggles-fill",
	});
}

export default Component;
