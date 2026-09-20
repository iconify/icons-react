import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sapeidcnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sapeidcnd"/>`,
		"fallback": "simple-icons:kx",
	});
}

export default Component;
