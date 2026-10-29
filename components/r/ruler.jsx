import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fmn_qacoy.css';
import '../../css/r/rzoychbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fmn_qacoy"/><path class="rzoychbjy wm-a"/></g>`,
		"fallback": "withicons:ruler",
	});
}

export default Component;
