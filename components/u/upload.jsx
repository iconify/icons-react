import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w-aiud5ru.css';
import '../../css/z/zhm-dib2f.css';
import '../../css/l/l9fprqb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w-aiud5ru"/><path class="zhm-dib2f"/><path class="l9fprqb_p"/></g>`,
		"fallback": "iconaut:upload",
	});
}

export default Component;
