import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf59xfbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf59xfbhn"/>`,
		"fallback": "mdi:lamp-outline",
	});
}

export default Component;
