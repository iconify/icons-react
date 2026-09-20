import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbsc4s31x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbsc4s31x"/>`,
		"fallback": "ri:login-circle-line",
	});
}

export default Component;
