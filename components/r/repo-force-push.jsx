import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w7987kb8i.css';
import '../../css/f/fl3cbbb-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w7987kb8i"/><path clip-rule="evenodd" class="fl3cbbb-h"/></g>`,
		"fallback": "codicon:repo-force-push",
	});
}

export default Component;
