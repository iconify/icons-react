import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl16xx4ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl16xx4ji"/>`,
		"fallback": "mdi:phone-rotate-landscape",
	});
}

export default Component;
