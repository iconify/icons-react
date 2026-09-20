import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws503nztc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws503nztc"/>`,
		"fallback": "reicon:send3-filled",
	});
}

export default Component;
