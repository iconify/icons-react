import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdfrx6wwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdfrx6wwy"/>`,
		"fallback": "streamline-ultimate:phone-vibrate-bold",
	});
}

export default Component;
