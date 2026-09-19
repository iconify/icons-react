import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/giax-8b2r.css';
import '../../css/z/zjedcjb0z.css';
import '../../css/l/l_khb_z8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="giax-8b2r"/><path class="zjedcjb0z"/><path clip-rule="evenodd" class="l_khb_z8o"/></g>`,
		"fallback": "healthicons:measles-outline-24px",
	});
}

export default Component;
