import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4nbeuj_m.css';
import '../../css/q/ql3hqacfh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4nbeuj_m"/><path clip-rule="evenodd" class="ql3hqacfh"/></g>`,
		"fallback": "codicon:repo-push",
	});
}

export default Component;
