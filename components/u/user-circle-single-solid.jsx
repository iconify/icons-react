import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vov3w-bsp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vov3w-bsp"/>`,
		"fallback": "streamline-flex:user-circle-single-solid",
	});
}

export default Component;
