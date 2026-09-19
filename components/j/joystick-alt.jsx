import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryk7c9tyn.css';
import '../../css/r/rv64cqbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryk7c9tyn"/><path class="rv64cqbog"/>`,
		"fallback": "boxicons:joystick-alt",
	});
}

export default Component;
