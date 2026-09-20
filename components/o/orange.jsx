import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me07f5bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me07f5bun"/>`,
		"fallback": "thesvg:orange",
	});
}

export default Component;
