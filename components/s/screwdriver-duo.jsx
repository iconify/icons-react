import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wewzyfbiz.css';
import '../../css/h/hwfj2zbsh.css';
import '../../css/q/qygck_omr.css';
import '../../css/i/il_myibjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wewzyfbiz"/><path class="hwfj2zbsh wm-a"/><path class="qygck_omr wm-a"/><path class="il_myibjf"/></g>`,
		"fallback": "withicons:screwdriver-duo",
	});
}

export default Component;
