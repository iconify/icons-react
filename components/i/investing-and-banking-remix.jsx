import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doqujn1zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="doqujn1zm"/>`,
		"fallback": "streamline-sharp:investing-and-banking-remix",
	});
}

export default Component;
