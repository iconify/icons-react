import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unb5jhb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unb5jhb0b"/>`,
		"fallback": "keyline-icons:sun-medium-sharp",
	});
}

export default Component;
