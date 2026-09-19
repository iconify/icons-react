import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1i9cleuc.css';
import '../../css/c/ccxfa4bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1i9cleuc"/><path clip-rule="evenodd" class="ccxfa4bzg"/></g>`,
		"fallback": "healthicons:mobile-24px",
	});
}

export default Component;
