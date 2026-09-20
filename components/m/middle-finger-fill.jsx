import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms2x3t45m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms2x3t45m"/>`,
		"fallback": "mingcute:middle-finger-fill",
	});
}

export default Component;
