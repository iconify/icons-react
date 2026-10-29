import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tl2jjgbhr.css';
import '../../css/u/u8judxq1u.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/v/vol26sbxp.css';
import '../../css/h/h8yk63bld.css';
import '../../css/f/f_j4qebyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tl2jjgbhr wm-deco"/><path class="u8judxq1u wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="vol26sbxp wm-k"/><path class="h8yk63bld wm-a"/><path class="f_j4qebyz wm-k"/></g>`,
		"fallback": "withicons:sparkles-blueprint",
	});
}

export default Component;
