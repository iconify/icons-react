import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tu5qhwb4p.css';
import '../../css/b/bqabc6niv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tu5qhwb4p"/><path class="bqabc6niv wm-a"/></g>`,
		"fallback": "withicons:scissors",
	});
}

export default Component;
