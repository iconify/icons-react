import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmy16fsgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmy16fsgd"/>`,
		"fallback": "streamline-ultimate:swap-camera-bold",
	});
}

export default Component;
