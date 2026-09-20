import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pubj3xbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pubj3xbtm"/>`,
		"fallback": "ri:sound-module-fill",
	});
}

export default Component;
