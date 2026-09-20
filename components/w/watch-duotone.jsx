import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9pqy8nhg.css';
import '../../css/l/lo4wcqb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9pqy8nhg"/><path clip-rule="evenodd" class="lo4wcqb4l"/></g>`,
		"fallback": "keyline-icons:watch-duotone",
	});
}

export default Component;
