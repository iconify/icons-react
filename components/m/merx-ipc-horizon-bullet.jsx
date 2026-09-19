import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljz9_d-pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljz9_d-pg"/>`,
		"fallback": "cbi:merx-ipc-horizon-bullet",
	});
}

export default Component;
