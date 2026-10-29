import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll_-f9b-g.css';
import '../../css/g/gxjs16b5s.css';
import '../../css/k/k56gh1yvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ll_-f9b-g wm-a"/><path class="gxjs16b5s wm-a"/><path class="k56gh1yvu"/></g>`,
		"fallback": "withicons:lasso-duo",
	});
}

export default Component;
