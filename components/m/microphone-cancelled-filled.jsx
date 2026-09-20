import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syxhos6-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syxhos6-n"/>`,
		"fallback": "ix:microphone-cancelled-filled",
	});
}

export default Component;
