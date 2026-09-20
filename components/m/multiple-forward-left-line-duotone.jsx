import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q01sgdbhz.css';
import '../../css/f/fjj4mp5lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q01sgdbhz"/><path class="fjj4mp5lt"/></g>`,
		"fallback": "solar:multiple-forward-left-line-duotone",
	});
}

export default Component;
