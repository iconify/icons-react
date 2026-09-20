import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n65c3dbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n65c3dbsk"/>`,
		"fallback": "keyline-icons:menu",
	});
}

export default Component;
