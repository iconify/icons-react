import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weba2ibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="weba2ibkn"/>`,
		"fallback": "streamline-sharp:milk-solid",
	});
}

export default Component;
