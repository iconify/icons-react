import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpqy10b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpqy10b8v"/>`,
		"fallback": "mdi:play-speed",
	});
}

export default Component;
