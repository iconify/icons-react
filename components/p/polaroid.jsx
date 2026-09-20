import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fht-kwr4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fht-kwr4i"/>`,
		"fallback": "mdi:polaroid",
	});
}

export default Component;
