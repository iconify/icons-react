import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtgb06r4t.css';
import '../../css/z/z9zekhb9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qtgb06r4t"/><path class="z9zekhb9x"/></g>`,
		"fallback": "codicon:run-all-coverage",
	});
}

export default Component;
