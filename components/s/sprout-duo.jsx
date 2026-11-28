import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsqkiebje.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lpnxgyw7y.css';
import '../../css/h/h_u1fj4xc.css';
import '../../css/v/vf4566bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsqkiebje secondary"/><g class="dt0cm9dhy primary"><path class="lpnxgyw7y"/><path class="h_u1fj4xc"/><path class="vf4566bmk"/></g>`,
		"fallback": "iconaut:sprout-duo",
	});
}

export default Component;
