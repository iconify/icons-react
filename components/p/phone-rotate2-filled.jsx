import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg-3l4cle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wg-3l4cle"/>`,
		"fallback": "reicon:phone-rotate2-filled",
	});
}

export default Component;
