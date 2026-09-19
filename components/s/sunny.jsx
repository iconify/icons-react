import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydtl0dbzz.css';
import '../../css/f/f6mr6abrr.css';
import '../../css/w/wzjiiw0kk.css';
import '../../css/k/ka665cbqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ydtl0dbzz"/><path class="f6mr6abrr"/><path class="wzjiiw0kk"/><path class="ka665cbqv"/></g>`,
		"fallback": "icon-park-outline:sunny",
	});
}

export default Component;
