import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlwdbmc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlwdbmc7v"/>`,
		"fallback": "noviair:teapot",
	});
}

export default Component;
