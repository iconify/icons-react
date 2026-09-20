import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrybhdcyu.css';
import '../../css/e/e1c8dcbsl.css';
import '../../css/v/vbo1dqbwo.css';
import '../../css/m/mpskmzk8x.css';
import '../../css/w/wx17bz8dg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jrybhdcyu"/><path class="e1c8dcbsl"/><path class="vbo1dqbwo"/><path class="mpskmzk8x"/><path class="wx17bz8dg"/></g>`,
		"fallback": "streamline-color:watch-circle-menu",
	});
}

export default Component;
