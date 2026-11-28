import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j39z1x3ue.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5o72ctes.css';
import '../../css/g/gg4tmrbop.css';
import '../../css/g/gt-qm7b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j39z1x3ue secondary"/><g class="dt0cm9dhy primary"><path class="k5o72ctes"/><path class="gg4tmrbop"/><path class="gt-qm7b9j"/></g>`,
		"fallback": "iconaut:shrub-duo",
	});
}

export default Component;
