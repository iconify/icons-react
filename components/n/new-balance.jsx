import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbgqee1_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbgqee1_v"/>`,
		"fallback": "thesvg-color:new-balance",
	});
}

export default Component;
