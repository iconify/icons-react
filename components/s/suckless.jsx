import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtu-8o8di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtu-8o8di"/>`,
		"fallback": "simple-icons:suckless",
	});
}

export default Component;
