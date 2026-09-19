import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm4l_5_0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm4l_5_0r"/>`,
		"fallback": "hugeicons:tulip",
	});
}

export default Component;
