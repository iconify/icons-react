import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2tai6bap.css';
import '../../css/c/cgpqwab7t.css';
import '../../css/p/p_ely1eej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2tai6bap"/><path class="cgpqwab7t"/><path clip-rule="evenodd" class="p_ely1eej"/></g>`,
		"fallback": "reicon:phone-rotate2-duotone",
	});
}

export default Component;
