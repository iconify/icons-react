import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fes7web_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fes7web_r"/>`,
		"fallback": "gg:microsoft",
	});
}

export default Component;
