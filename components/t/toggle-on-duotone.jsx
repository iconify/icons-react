import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4zev7d4r.css';
import '../../css/j/j7l35go9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4zev7d4r"/><path clip-rule="evenodd" class="j7l35go9m"/></g>`,
		"fallback": "keyline-icons:toggle-on-duotone",
	});
}

export default Component;
