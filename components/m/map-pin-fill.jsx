import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lets0u5sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lets0u5sz"/>`,
		"fallback": "keyline-icons:map-pin-fill",
	});
}

export default Component;
