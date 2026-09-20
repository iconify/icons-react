import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm_6kmbps.css';
import '../../css/c/c4cw7btpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gm_6kmbps"/><path class="c4cw7btpk"/></g>`,
		"fallback": "reicon:mouse-circle-filled",
	});
}

export default Component;
