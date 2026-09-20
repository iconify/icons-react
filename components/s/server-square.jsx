import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2hjbjl_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2hjbjl_d"/>`,
		"fallback": "reicon:server-square",
	});
}

export default Component;
