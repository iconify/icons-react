import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l20h3acam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l20h3acam"/>`,
		"fallback": "streamline-ultimate:text-underline-bold",
	});
}

export default Component;
