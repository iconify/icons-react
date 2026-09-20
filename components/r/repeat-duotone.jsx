import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfsu8wb0e.css';
import '../../css/h/h9m2u-8vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gfsu8wb0e"/><path class="h9m2u-8vi"/></g>`,
		"fallback": "reicon:repeat-duotone",
	});
}

export default Component;
