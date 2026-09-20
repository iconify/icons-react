import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8l3klq-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8l3klq-i"/>`,
		"fallback": "mdi:vlc",
	});
}

export default Component;
