import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1l0kebse.css';
import '../../css/t/til55ifes.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m1l0kebse"/><path class="til55ifes wm-a"/><path class="psyzc1_dw"/><path class="mvz-u7b1a wm-a"/></g>`,
		"fallback": "withicons:wand-sparkles-duo",
	});
}

export default Component;
