import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mu9bddh4x.css';
import '../../css/e/ekyn8cc0w.css';
import '../../css/c/cnzf-abva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mu9bddh4x"/><path class="ekyn8cc0w"/><path class="cnzf-abva"/></g>`,
		"fallback": "codicon:layers",
	});
}

export default Component;
