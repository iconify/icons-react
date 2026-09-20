import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1jdzlbau.css';
import '../../css/n/n0fkizyoa.css';
import '../../css/z/zudf230vb.css';
import '../../css/f/fqtfdwbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1jdzlbau"/><path class="n0fkizyoa"/><path class="zudf230vb"/><path class="fqtfdwbms"/></g>`,
		"fallback": "solar:watch-square-bold-duotone",
	});
}

export default Component;
