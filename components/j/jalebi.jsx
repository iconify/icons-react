import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jy9njbjlp.css';
import '../../css/u/u_9uqpblx.css';
import '../../css/t/tbl_t3tsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jy9njbjlp"/><path class="u_9uqpblx"/><path class="tbl_t3tsa"/></g>`,
		"fallback": "withicons-bauhaus:jalebi",
	});
}

export default Component;
