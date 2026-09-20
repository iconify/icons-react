import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-_jv4ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nu-_jv4ok"/>`,
		"fallback": "streamline-sharp:transfer-truck-time-solid",
	});
}

export default Component;
