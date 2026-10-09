import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1qjmetax.css';
import '../../css/e/ev3t13bln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1qjmetax"/><path class="ev3t13bln"/>`,
		"fallback": "energy-icons:newspaper-20",
	});
}

export default Component;
