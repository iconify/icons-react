import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lg9pn0d6c.css';
import '../../css/l/l3t4a9kch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lg9pn0d6c"/><path class="l3t4a9kch"/></g>`,
		"fallback": "tabler:library-plus-filled",
	});
}

export default Component;
