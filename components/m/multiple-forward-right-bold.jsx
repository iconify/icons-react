import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkvbobd_g.css';
import '../../css/p/pfr06xbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkvbobd_g"/><path clip-rule="evenodd" class="pfr06xbye"/>`,
		"fallback": "solar:multiple-forward-right-bold",
	});
}

export default Component;
