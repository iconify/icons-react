import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwv-ctbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwv-ctbmm"/>`,
		"fallback": "streamline-ultimate:make-up-lipstick-bold",
	});
}

export default Component;
