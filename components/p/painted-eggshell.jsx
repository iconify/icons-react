import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oump4sbzr.css';
import '../../css/a/a07kpgmwj.css';
import '../../css/y/yip5bw25e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oump4sbzr"/><path class="a07kpgmwj"/><path clip-rule="evenodd" class="yip5bw25e"/></g>`,
		"fallback": "icon-park-outline:painted-eggshell",
	});
}

export default Component;
