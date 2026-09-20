import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngojfiash.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngojfiash"/>`,
		"fallback": "keyline-icons:upload",
	});
}

export default Component;
