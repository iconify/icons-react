import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jsdds94cs.css';
import '../../css/w/wt9ji_gcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jsdds94cs"/><path class="wt9ji_gcr"/></g>`,
		"fallback": "wordpress:replay",
	});
}

export default Component;
