import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-3e_mocl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/un1cj3b-n.css';
import '../../css/p/pgtdp5mhj.css';
import '../../css/y/y4vesqbkl.css';
import '../../css/k/kl744mb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-3e_mocl secondary"/><g class="dt0cm9dhy primary"><path class="un1cj3b-n"/><path class="pgtdp5mhj"/><path class="y4vesqbkl"/><path class="kl744mb7q"/></g>`,
		"fallback": "iconaut:toolbox-duo",
	});
}

export default Component;
