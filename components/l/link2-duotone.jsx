import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6u84ztju.css';
import '../../css/n/n_4r7zbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6u84ztju"/><path class="n_4r7zbss"/></g>`,
		"fallback": "reicon:link2-duotone",
	});
}

export default Component;
