import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3osrbgdw.css';
import '../../css/l/lo-zz6bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p3osrbgdw"/><path class="lo-zz6bmf"/></g>`,
		"fallback": "iconoir:truck",
	});
}

export default Component;
