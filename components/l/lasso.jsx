import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tipxp9bql.css';
import '../../css/f/f7dvesxfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tipxp9bql wm-k"/><path class="f7dvesxfn wm-a"/></g>`,
		"fallback": "withicons-bauhaus:lasso",
	});
}

export default Component;
