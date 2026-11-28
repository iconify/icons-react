import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sca63abdg.css';
import '../../css/x/x2yomyb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sca63abdg secondary"/><path class="primary x2yomyb7h"/></g>`,
		"fallback": "iconaut:rewind-duotone",
	});
}

export default Component;
