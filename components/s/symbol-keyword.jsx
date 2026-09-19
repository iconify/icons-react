import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np53o28bd.css';
import '../../css/c/cvi0tubrb.css';
import '../../css/y/ywsaehxql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="np53o28bd"/><path clip-rule="evenodd" class="cvi0tubrb"/><path class="ywsaehxql"/></g>`,
		"fallback": "codicon:symbol-keyword",
	});
}

export default Component;
