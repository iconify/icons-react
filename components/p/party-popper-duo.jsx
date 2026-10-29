import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vx5hsbbjy.css';
import '../../css/s/sjl2bfbwr.css';
import '../../css/s/svav8jh5q.css';
import '../../css/d/dikszcc_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vx5hsbbjy"/><path class="sjl2bfbwr wm-s"/><path class="svav8jh5q"/><path class="dikszcc_o wm-a"/></g>`,
		"fallback": "withicons:party-popper-duo",
	});
}

export default Component;
