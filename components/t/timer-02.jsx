import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp2ocqb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp2ocqb2d"/>`,
		"fallback": "hugeicons:timer-02",
	});
}

export default Component;
