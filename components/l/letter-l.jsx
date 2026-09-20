import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gli4g3-ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gli4g3-ti"/>`,
		"fallback": "pixelarticons:letter-l",
	});
}

export default Component;
