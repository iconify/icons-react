import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mr8f6fb0f.css';
import '../../css/s/sdyfvcrbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mr8f6fb0f"/><path clip-rule="evenodd" class="sdyfvcrbb"/></g>`,
		"fallback": "gg:toggle-square-off",
	});
}

export default Component;
