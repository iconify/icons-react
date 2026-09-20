import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smpy58bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smpy58bfi"/>`,
		"fallback": "thesvg-color:new-japan-pro-wrestling",
	});
}

export default Component;
