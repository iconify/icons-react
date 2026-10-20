import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wm26qcilw.css';
import '../../css/j/jlpzeeb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wm26qcilw"/><path class="jlpzeeb-u"/></g>`,
		"fallback": "wordpress:term-count",
	});
}

export default Component;
