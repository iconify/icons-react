import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn3zkrktp.css';
import '../../css/u/uunh3-blp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nn3zkrktp"/><path class="uunh3-blp"/></g>`,
		"fallback": "codicon:run-coverage",
	});
}

export default Component;
