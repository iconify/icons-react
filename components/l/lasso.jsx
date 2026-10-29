import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k56gh1yvu.css';
import '../../css/g/gxjs16b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k56gh1yvu"/><path class="gxjs16b5s wm-a"/></g>`,
		"fallback": "withicons:lasso",
	});
}

export default Component;
