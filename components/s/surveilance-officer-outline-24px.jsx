import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojpbrt71s.css';
import '../../css/e/es_79cb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojpbrt71s"/><path clip-rule="evenodd" class="es_79cb9v"/></g>`,
		"fallback": "healthicons:surveilance-officer-outline-24px",
	});
}

export default Component;
