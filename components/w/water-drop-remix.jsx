import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aju25plox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aju25plox"/>`,
		"fallback": "streamline-sharp:water-drop-remix",
	});
}

export default Component;
