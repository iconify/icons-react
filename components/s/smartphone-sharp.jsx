import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlxio1l9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlxio1l9r"/>`,
		"fallback": "pixelarticons:smartphone-sharp",
	});
}

export default Component;
