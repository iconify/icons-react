import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yct52e2ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yct52e2ky"/>`,
		"fallback": "thesvg-color:smashing-magazine",
	});
}

export default Component;
