import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_igsccvz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/diqg_sbxg.css';
import '../../css/e/e11icibaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_igsccvz secondary"/><g class="dt0cm9dhy primary"><path class="diqg_sbxg"/><path class="e11icibaw"/></g>`,
		"fallback": "iconaut:pill-duo",
	});
}

export default Component;
