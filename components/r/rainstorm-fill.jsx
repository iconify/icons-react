import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abgj25bzr.css';
import '../../css/a/almf4_bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abgj25bzr"/><path class="almf4_bws"/>`,
		"fallback": "mingcute:rainstorm-fill",
	});
}

export default Component;
