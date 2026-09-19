import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x26afwbqj.css';
import '../../css/a/ah9k5rb0l.css';
import '../../css/w/w5xgdxbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x26afwbqj"/><path class="ah9k5rb0l"/><path class="w5xgdxbls"/></g>`,
		"fallback": "ginetex:mild-drying-processes",
	});
}

export default Component;
