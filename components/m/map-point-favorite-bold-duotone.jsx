import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev04l0b7x.css';
import '../../css/x/xzsnbubid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev04l0b7x"/><path class="xzsnbubid"/>`,
		"fallback": "solar:map-point-favorite-bold-duotone",
	});
}

export default Component;
