import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r-fvff_qk.css';
import '../../css/x/xgrg7usag.css';
import '../../css/p/pse4-422d.css';
import '../../css/m/m5igdmzqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r-fvff_qk"/><path class="wm-a xgrg7usag"/><path class="pse4-422d"/><path class="m5igdmzqn wm-a"/></g>`,
		"fallback": "withicons:refresh-duo",
	});
}

export default Component;
