import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eijcr9bgh.css';
import '../../css/h/h_qr04una.css';
import '../../css/f/ffwokxblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eijcr9bgh"/><path class="h_qr04una"/><path class="ffwokxblk"/>`,
		"fallback": "streamline-ultimate:scooter-fast-bold",
	});
}

export default Component;
