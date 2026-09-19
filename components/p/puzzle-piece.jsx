import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwz5aj3dz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwz5aj3dz"/>`,
		"fallback": "fa6-solid:puzzle-piece",
	});
}

export default Component;
