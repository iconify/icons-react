import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uth1sgdmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uth1sgdmi"/>`,
		"fallback": "keyline-icons:sunrise-sharp",
	});
}

export default Component;
