import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bet7e2qhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bet7e2qhr"/>`,
		"fallback": "boxicons:network-device-filled",
	});
}

export default Component;
