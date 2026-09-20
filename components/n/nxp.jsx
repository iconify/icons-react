import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir472ac2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir472ac2m"/>`,
		"fallback": "simple-icons:nxp",
	});
}

export default Component;
