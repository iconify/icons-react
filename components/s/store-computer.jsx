import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdqpnx-ip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdqpnx-ip"/>`,
		"fallback": "streamline:store-computer",
	});
}

export default Component;
