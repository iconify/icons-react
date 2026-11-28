import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-g_vsbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-g_vsbag"/>`,
		"fallback": "iconaut:thumbs-up-solid",
	});
}

export default Component;
