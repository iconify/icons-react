import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sfboi1amy.css';
import '../../css/m/mlzja6boa.css';
import '../../css/l/ly23pmblx.css';
import '../../css/l/ld4zezz7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sfboi1amy"/><path class="mlzja6boa wm-a"/><path class="ly23pmblx"/><path class="ld4zezz7d wm-a"/></g>`,
		"fallback": "withicons:train-duo",
	});
}

export default Component;
