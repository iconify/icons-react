import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vugi_ac-r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vugi_ac-r"/>`,
		"fallback": "heroicons-solid:video-camera-slash",
	});
}

export default Component;
