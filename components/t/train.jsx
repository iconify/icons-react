import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ly23pmblx.css';
import '../../css/g/gt402wbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ly23pmblx"/><path class="gt402wbqt wm-a"/></g>`,
		"fallback": "withicons:train",
	});
}

export default Component;
