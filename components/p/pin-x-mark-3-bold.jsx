import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4x9v31po.css';
import '../../css/g/g8g82bb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4x9v31po"/><path class="g8g82bb_d"/>`,
		"fallback": "streamline-ultimate:pin-x-mark-3-bold",
	});
}

export default Component;
