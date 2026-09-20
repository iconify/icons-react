import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjb5kkbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjb5kkbmy"/>`,
		"fallback": "mdi:ocarina",
	});
}

export default Component;
