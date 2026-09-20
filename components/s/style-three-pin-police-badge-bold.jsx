import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iorwqwvhh.css';
import '../../css/g/ggtpew6cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iorwqwvhh"/><path class="ggtpew6cj"/>`,
		"fallback": "streamline-ultimate:style-three-pin-police-badge-bold",
	});
}

export default Component;
