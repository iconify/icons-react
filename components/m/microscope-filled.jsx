import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pc8b7jb1x.css';
import '../../css/j/jkqdz_yog.css';
import '../../css/x/xnsh14cen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pc8b7jb1x"/><path class="jkqdz_yog"/><path class="xnsh14cen"/></g>`,
		"fallback": "reicon:microscope-filled",
	});
}

export default Component;
