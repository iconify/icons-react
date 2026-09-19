import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w2i5xtfsh.css';
import '../../css/s/syxr79h_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w2i5xtfsh"/><path class="syxr79h_p"/></g>`,
		"fallback": "iconoir:square-cursor",
	});
}

export default Component;
