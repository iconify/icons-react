import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu5wtw1zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vu5wtw1zf"/>`,
		"fallback": "streamline-logos:plurk-logo-2-solid",
	});
}

export default Component;
