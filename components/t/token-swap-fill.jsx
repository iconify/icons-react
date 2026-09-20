import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3e-5b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj3e-5b2m"/>`,
		"fallback": "ri:token-swap-fill",
	});
}

export default Component;
