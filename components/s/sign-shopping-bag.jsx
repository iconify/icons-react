import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb_nbbb0s.css';
import '../../css/o/oyduodrkl.css';
import '../../css/t/tzew6n3pl.css';
import '../../css/v/vx28bvzzr.css';
import '../../css/a/a4aiz4b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nb_nbbb0s"/><path class="oyduodrkl"/><path class="tzew6n3pl"/><path class="vx28bvzzr"/><path class="a4aiz4b1b"/></g>`,
		"fallback": "streamline-cyber-color:sign-shopping-bag",
	});
}

export default Component;
