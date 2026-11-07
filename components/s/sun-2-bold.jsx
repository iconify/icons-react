import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgk4i-bav.css';
import '../../css/z/z3p-nc5qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgk4i-bav"/><path clip-rule="evenodd" class="z3p-nc5qo"/>`,
		"fallback": "solar:sun-2-bold",
	});
}

export default Component;
