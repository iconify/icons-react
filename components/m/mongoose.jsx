import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pomm6baka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pomm6baka"/>`,
		"fallback": "thesvg-color:mongoose",
	});
}

export default Component;
