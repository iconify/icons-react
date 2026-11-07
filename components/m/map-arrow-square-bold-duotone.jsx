import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os7xz0mqz.css';
import '../../css/f/f3axzccsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os7xz0mqz"/><path class="f3axzccsm"/>`,
		"fallback": "solar:map-arrow-square-bold-duotone",
	});
}

export default Component;
