import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy2wy_b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy2wy_b7q"/>`,
		"fallback": "ri:rfid-fill",
	});
}

export default Component;
