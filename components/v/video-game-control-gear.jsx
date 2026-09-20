import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fv56p6rkl.css';
import '../../css/s/snz5ok0_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fv56p6rkl"/><path class="snz5ok0_x"/></g>`,
		"fallback": "streamline-freehand-color:video-game-control-gear",
	});
}

export default Component;
