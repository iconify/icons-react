import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuu2htbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuu2htbwp"/>`,
		"fallback": "reicon:volume-mute",
	});
}

export default Component;
