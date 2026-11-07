import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy2kejbyw.css';
import '../../css/j/j-36nlbdh.css';
import '../../css/h/hxvqwbbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy2kejbyw"/><path class="j-36nlbdh"/><path class="hxvqwbbdj"/>`,
		"fallback": "solar:laptop-minimalistic-bold-duotone",
	});
}

export default Component;
