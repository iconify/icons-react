import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f5ro_pbbz.css';
import '../../css/h/h6mtbcfpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f5ro_pbbz"/><path class="h6mtbcfpq"/></g>`,
		"fallback": "iconaut:pin",
	});
}

export default Component;
