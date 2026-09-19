import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ay2wwtb6l.css';
import '../../css/q/qi2t-i38j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ay2wwtb6l"/><path class="qi2t-i38j"/></g>`,
		"fallback": "heroicons-solid:scissors",
	});
}

export default Component;
