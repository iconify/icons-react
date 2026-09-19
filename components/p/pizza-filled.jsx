import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_xcrkbeg.css';
import '../../css/o/ojv9pubkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_xcrkbeg"/><path class="ojv9pubkm"/>`,
		"fallback": "boxicons:pizza-filled",
	});
}

export default Component;
