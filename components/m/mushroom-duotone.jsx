import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj0at4l-j.css';
import '../../css/i/idfbkjibg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj0at4l-j secondary"/><path class="idfbkjibg primary"/></g>`,
		"fallback": "iconaut:mushroom-duotone",
	});
}

export default Component;
