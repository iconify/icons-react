import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf3nmubio.css';
import '../../css/t/tjfdtw4pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf3nmubio"/><path clip-rule="evenodd" class="tjfdtw4pg"/>`,
		"fallback": "solar:reel-2-bold",
	});
}

export default Component;
