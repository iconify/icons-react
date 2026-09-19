import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjqjoxbip.css';
import '../../css/g/gyyo-sbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjqjoxbip"/><path clip-rule="evenodd" class="gyyo-sbnv"/></g>`,
		"fallback": "healthicons:respirator-outline-24px",
	});
}

export default Component;
