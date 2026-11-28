import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s481l7_yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s481l7_yn"/>`,
		"fallback": "noviair-light:user-gear",
	});
}

export default Component;
