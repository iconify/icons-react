import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4n78dvgd.css';
import '../../css/c/c05n68bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4n78dvgd"/><path clip-rule="evenodd" class="c05n68bja"/></g>`,
		"fallback": "healthicons:lactating-24px",
	});
}

export default Component;
