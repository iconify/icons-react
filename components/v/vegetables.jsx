import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/enzxcfb7d.css';
import '../../css/x/xvuzfibez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="enzxcfb7d"/><path class="xvuzfibez"/></g>`,
		"fallback": "healthicons:vegetables",
	});
}

export default Component;
