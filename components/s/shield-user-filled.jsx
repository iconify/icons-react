import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd4eude7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hd4eude7h"/>`,
		"fallback": "reicon:shield-user-filled",
	});
}

export default Component;
