import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg1uejb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg1uejb7k"/>`,
		"fallback": "ri:send-ins-fill",
	});
}

export default Component;
