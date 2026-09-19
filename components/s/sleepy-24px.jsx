import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d79m7acou.css';
import '../../css/l/lrj_gyz7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d79m7acou"/><path class="lrj_gyz7y"/></g>`,
		"fallback": "healthicons:sleepy-24px",
	});
}

export default Component;
