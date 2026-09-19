import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_6u9nasf.css';
import '../../css/c/cnpgutbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p_6u9nasf"/><path class="cnpgutbdq"/></g>`,
		"fallback": "healthicons:running-water-outline-24px",
	});
}

export default Component;
