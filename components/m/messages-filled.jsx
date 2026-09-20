import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmws3517e.css';
import '../../css/e/eyx6sqoxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmws3517e"/><path class="eyx6sqoxq"/></g>`,
		"fallback": "tabler:messages-filled",
	});
}

export default Component;
