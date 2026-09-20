import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0dxb3_5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0dxb3_5m"/>`,
		"fallback": "mdi:lavatory",
	});
}

export default Component;
