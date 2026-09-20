import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w149hibdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w149hibdn"/>`,
		"fallback": "keyline-icons:message-square-sparkle-fill",
	});
}

export default Component;
