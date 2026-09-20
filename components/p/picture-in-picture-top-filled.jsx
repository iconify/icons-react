import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hww7_mpri.css';
import '../../css/v/vdh17syoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hww7_mpri"/><path class="vdh17syoh"/></g>`,
		"fallback": "tabler:picture-in-picture-top-filled",
	});
}

export default Component;
