import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/im_cjib3z.css';
import '../../css/b/b5nt-qb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="im_cjib3z secondary"/><path class="b5nt-qb9l primary"/></g>`,
		"fallback": "iconaut:package-duotone",
	});
}

export default Component;
