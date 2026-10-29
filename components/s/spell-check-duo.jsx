import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vclaqt84l.css';
import '../../css/c/cx9tddlgw.css';
import '../../css/m/mika2zbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vclaqt84l wm-s"/><path class="cx9tddlgw"/><path class="mika2zbzn wm-a"/></g>`,
		"fallback": "withicons:spell-check-duo",
	});
}

export default Component;
