import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo_vfkzgk.css';
import '../../css/p/phifkqb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eo_vfkzgk"/><path class="phifkqb7g"/></g>`,
		"fallback": "healthicons:village-outline-24px",
	});
}

export default Component;
