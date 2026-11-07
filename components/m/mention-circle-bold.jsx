import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp6su4bex.css';
import '../../css/p/potfbbb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp6su4bex"/><path clip-rule="evenodd" class="potfbbb8v"/>`,
		"fallback": "solar:mention-circle-bold",
	});
}

export default Component;
