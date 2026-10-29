import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qi_k5vohi.css';
import '../../css/e/ekc914bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qi_k5vohi"/><path class="ekc914bfp wm-a"/></g>`,
		"fallback": "withicons:thandai",
	});
}

export default Component;
