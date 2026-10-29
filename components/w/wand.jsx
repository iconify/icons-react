import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/i/igb16csex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psyzc1_dw"/><path class="igb16csex wm-a"/></g>`,
		"fallback": "withicons:wand",
	});
}

export default Component;
