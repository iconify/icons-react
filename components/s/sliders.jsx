import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/icg4znpvz.css';
import '../../css/c/c93kobbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="icg4znpvz"/><path class="c93kobbbl wm-a"/></g>`,
		"fallback": "withicons:sliders",
	});
}

export default Component;
