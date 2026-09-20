import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj-4iw7vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj-4iw7vd"/>`,
		"fallback": "mdi:music-off",
	});
}

export default Component;
