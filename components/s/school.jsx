import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhdtd5bsp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhdtd5bsp"/>`,
		"fallback": "fa7-solid:school",
	});
}

export default Component;
