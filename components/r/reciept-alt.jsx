import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp_z5zbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp_z5zbhr"/>`,
		"fallback": "pixelarticons:reciept-alt",
	});
}

export default Component;
