import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isbbe3e6v.css';
import '../../css/y/ynshwsq7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isbbe3e6v"/><rect class="ynshwsq7u"/>`,
		"fallback": "boxicons:tv-alt-filled",
	});
}

export default Component;
