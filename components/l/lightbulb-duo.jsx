import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfdi_2b9g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzyrenbep.css';
import '../../css/e/e4rg5h2em.css';
import '../../css/y/yiyni5b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfdi_2b9g secondary"/><g class="dt0cm9dhy primary"><path class="tzyrenbep"/><path class="e4rg5h2em"/><path class="yiyni5b1f"/></g>`,
		"fallback": "iconaut:lightbulb-duo",
	});
}

export default Component;
