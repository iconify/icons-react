import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmv87z_kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmv87z_kl"/>`,
		"fallback": "mingcute:live-location-line",
	});
}

export default Component;
