import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c0c-tniab.css';
import '../../css/k/k2m212bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c0c-tniab"/><path class="k2m212bgo"/></g>`,
		"fallback": "withicons:star-duo",
	});
}

export default Component;
