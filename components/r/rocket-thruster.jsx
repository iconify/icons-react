import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so3-zcgst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so3-zcgst"/>`,
		"fallback": "game-icons:rocket-thruster",
	});
}

export default Component;
