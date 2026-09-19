import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h36izvbcs.css';
import '../../css/i/il5p_gzny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h36izvbcs"/><path class="il5p_gzny"/></g>`,
		"fallback": "iconamoon:player-pause-duotone",
	});
}

export default Component;
