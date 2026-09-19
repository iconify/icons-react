import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rd8b6f9us.css';
import '../../css/g/gi_d5y8ek.css';
import '../../css/j/j0rvlxkbk.css';
import '../../css/h/hibut_iow.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rd8b6f9us"/><path class="gi_d5y8ek"/><path class="j0rvlxkbk"/><path class="hibut_iow"/></g>`,
		"fallback": "flagpack:la",
	});
}

export default Component;
