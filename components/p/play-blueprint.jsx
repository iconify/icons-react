import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c1xpabbuz.css';
import '../../css/e/ey6g4zpde.css';
import '../../css/m/mdh1f_tph.css';
import '../../css/j/jzrgssbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c1xpabbuz wm-deco"/><path class="ey6g4zpde wm-deco"/><path class="mdh1f_tph wm-deco"/><path class="jzrgssbeb"/></g>`,
		"fallback": "withicons:play-blueprint",
	});
}

export default Component;
