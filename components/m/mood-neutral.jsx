import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfycl63kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfycl63kx"/>`,
		"fallback": "pixelarticons:mood-neutral",
	});
}

export default Component;
