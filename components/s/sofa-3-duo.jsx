import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/h/hjysc2jjf.css';
import '../../css/p/p84xvje3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="hjysc2jjf"/><path class="p84xvje3v"/></g>`,
		"fallback": "streamline-kameleon-color:sofa-3-duo",
	});
}

export default Component;
