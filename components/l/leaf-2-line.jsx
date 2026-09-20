import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzqmbeoxz.css';
import '../../css/b/bve3o65en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzqmbeoxz"/><path class="bve3o65en"/>`,
		"fallback": "mingcute:leaf-2-line",
	});
}

export default Component;
