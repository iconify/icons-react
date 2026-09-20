import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uylhldb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uylhldb1m"/>`,
		"fallback": "ri:school-fill",
	});
}

export default Component;
