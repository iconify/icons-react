import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mslv4ubvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mslv4ubvy"/>`,
		"fallback": "mingcute:scarf-line",
	});
}

export default Component;
