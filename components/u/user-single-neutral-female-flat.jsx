import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5kdnowce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l5kdnowce"/>`,
		"fallback": "streamline-sharp-color:user-single-neutral-female-flat",
	});
}

export default Component;
