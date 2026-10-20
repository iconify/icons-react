import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wm26qcilw.css';
import '../../css/k/kl_713bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wm26qcilw"/><path class="kl_713bno"/></g>`,
		"fallback": "wordpress:tag",
	});
}

export default Component;
