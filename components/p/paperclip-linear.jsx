import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyfrh3d4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyfrh3d4i"/>`,
		"fallback": "solar:paperclip-linear",
	});
}

export default Component;
