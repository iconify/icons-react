import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eiexz3bzk.css';
import '../../css/b/bf7d-lzxu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eiexz3bzk"/><path class="bf7d-lzxu"/></g>`,
		"fallback": "heroicons-solid:save-as",
	});
}

export default Component;
