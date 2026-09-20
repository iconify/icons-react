import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tljny4ckc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tljny4ckc"/>`,
		"fallback": "mdi:swap-vertical-circle-outline",
	});
}

export default Component;
