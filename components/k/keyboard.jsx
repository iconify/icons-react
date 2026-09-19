import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa3e_ihor.css';
import '../../css/s/ss1-wab0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa3e_ihor"/><path class="ss1-wab0d"/>`,
		"fallback": "boxicons:keyboard",
	});
}

export default Component;
