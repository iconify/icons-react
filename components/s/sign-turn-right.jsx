import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecmgbj92q.css';
import '../../css/d/di0-edcue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecmgbj92q"/><path class="di0-edcue"/></g>`,
		"fallback": "bi:sign-turn-right",
	});
}

export default Component;
