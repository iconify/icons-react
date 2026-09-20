import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j09e05bmg.css';
import '../../css/b/b99j9sgyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j09e05bmg"/><path class="b99j9sgyi"/></g>`,
		"fallback": "reicon:square-forward-filled",
	});
}

export default Component;
