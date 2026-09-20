import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yko8wbc2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yko8wbc2a"/>`,
		"fallback": "streamline-ultimate:smart-watch-square-heart-bold",
	});
}

export default Component;
