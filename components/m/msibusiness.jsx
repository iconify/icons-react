import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj6b3bbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj6b3bbil"/>`,
		"fallback": "simple-icons:msibusiness",
	});
}

export default Component;
