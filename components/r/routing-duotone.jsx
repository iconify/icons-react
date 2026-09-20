import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu6v12w9j.css';
import '../../css/o/oz5k24b5z.css';
import '../../css/p/p0a_xzbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uu6v12w9j"/><path class="oz5k24b5z"/><path class="p0a_xzbos"/></g>`,
		"fallback": "reicon:routing-duotone",
	});
}

export default Component;
