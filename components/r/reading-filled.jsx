import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tni30y4jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tni30y4jf"/>`,
		"fallback": "boxicons:reading-filled",
	});
}

export default Component;
