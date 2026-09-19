import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nio8jccck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nio8jccck"/>`,
		"fallback": "iconoir:light-bulb-on",
	});
}

export default Component;
