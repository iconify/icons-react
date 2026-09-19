import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fff_zr3dz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fff_zr3dz"/>`,
		"fallback": "fa6-solid:peso-sign",
	});
}

export default Component;
