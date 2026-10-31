import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkjj9mb_g.css';
import '../../css/c/c09kvpbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkjj9mb_g"/><path class="c09kvpbzs"/></g>`,
		"fallback": "coolicons:pen-tool-duotone-round",
	});
}

export default Component;
