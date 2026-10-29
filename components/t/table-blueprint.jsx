import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jrpbbdoby.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/h/hjheo7blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jrpbbdoby wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="hjheo7blk"/></g>`,
		"fallback": "withicons:table-blueprint",
	});
}

export default Component;
