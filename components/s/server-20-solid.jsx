import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfuhj1bvk.css';
import '../../css/c/cmlgwxbox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfuhj1bvk"/><path clip-rule="evenodd" class="cmlgwxbox"/></g>`,
		"fallback": "heroicons:server-20-solid",
	});
}

export default Component;
