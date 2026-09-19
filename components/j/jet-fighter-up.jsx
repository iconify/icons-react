import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4k29qbiu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4k29qbiu"/>`,
		"fallback": "fa6-solid:jet-fighter-up",
	});
}

export default Component;
