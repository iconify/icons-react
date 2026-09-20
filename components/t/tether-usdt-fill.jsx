import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo2ri5m8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo2ri5m8s"/>`,
		"fallback": "mingcute:tether-usdt-fill",
	});
}

export default Component;
