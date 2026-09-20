import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxf2z2snj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxf2z2snj"/>`,
		"fallback": "mdi:numeric-nine-box",
	});
}

export default Component;
