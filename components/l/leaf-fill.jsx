import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr00z-buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr00z-buu"/>`,
		"fallback": "ri:leaf-fill",
	});
}

export default Component;
