import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3fa7zbhj.css';
import '../../css/p/p5t4w3b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3fa7zbhj"/><path class="p5t4w3b7i"/>`,
		"fallback": "streamline-ultimate:view-square-bold",
	});
}

export default Component;
