import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl9-1ibeu.css';
import '../../css/m/m3no34b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl9-1ibeu"/><path class="m3no34b0f"/>`,
		"fallback": "bx:link-alt",
	});
}

export default Component;
