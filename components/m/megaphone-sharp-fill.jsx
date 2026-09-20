import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij6qmgb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ij6qmgb8x"/>`,
		"fallback": "keyline-icons:megaphone-sharp-fill",
	});
}

export default Component;
