import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpn8ptbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpn8ptbkc"/>`,
		"fallback": "keyline-icons:search-x-sharp",
	});
}

export default Component;
