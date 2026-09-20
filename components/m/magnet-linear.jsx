import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz80s5bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz80s5bbp"/>`,
		"fallback": "solar:magnet-linear",
	});
}

export default Component;
