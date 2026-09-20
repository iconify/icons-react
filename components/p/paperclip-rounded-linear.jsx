import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlz4kab4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlz4kab4r"/>`,
		"fallback": "solar:paperclip-rounded-linear",
	});
}

export default Component;
