import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb-pm1l6d.css';
import '../../css/e/ex199jb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb-pm1l6d"/><path clip-rule="evenodd" class="ex199jb-r"/>`,
		"fallback": "solar:playlist-2-bold",
	});
}

export default Component;
