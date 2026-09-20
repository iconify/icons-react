import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-09zxbhd.css';
import '../../css/g/gbik_er2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v-09zxbhd"/><path class="gbik_er2h"/></g>`,
		"fallback": "reicon:mask-circle",
	});
}

export default Component;
