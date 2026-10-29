import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_3sqgb-r.css';
import '../../css/x/x4lq1hb2u.css';
import '../../css/v/v_917cbym.css';
import '../../css/p/py8uhtbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i_3sqgb-r"/><path class="wm-a x4lq1hb2u"/><path class="v_917cbym"/><path class="py8uhtbvo wm-a"/></g>`,
		"fallback": "withicons:tooth-crown-duo",
	});
}

export default Component;
