import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2_ykwjfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2_ykwjfd"/>`,
		"fallback": "streamline-ultimate:multiple-users-1-bold",
	});
}

export default Component;
