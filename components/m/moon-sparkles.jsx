import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ha4_9m1_p.css';
import '../../css/n/nyaxwelsj.css';
import '../../css/x/xgg-uc19w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ha4_9m1_p"/><path class="nyaxwelsj"/><path class="xgg-uc19w"/></g>`,
		"fallback": "iconaut:moon-sparkles",
	});
}

export default Component;
