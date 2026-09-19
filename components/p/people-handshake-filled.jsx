import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re4n0ebks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re4n0ebks"/>`,
		"fallback": "boxicons:people-handshake-filled",
	});
}

export default Component;
