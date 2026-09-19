import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_o05b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_o05b3s"/>`,
		"fallback": "bxs:volume-mute",
	});
}

export default Component;
