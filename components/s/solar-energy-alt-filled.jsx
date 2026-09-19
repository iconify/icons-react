import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsl6fiboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsl6fiboz"/>`,
		"fallback": "griddy-icons:solar-energy-alt-filled",
	});
}

export default Component;
