import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf8g6jb6t.css';
import '../../css/y/yrg7pgb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf8g6jb6t"/><path class="yrg7pgb0m"/>`,
		"fallback": "solar:stars-2-bold-duotone",
	});
}

export default Component;
