import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p927m4bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p927m4bwe"/>`,
		"fallback": "heroicons:video-camera-solid",
	});
}

export default Component;
