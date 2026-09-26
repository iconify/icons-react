import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0u3lcc-u.css';
import '../../css/f/fw0as8zpk.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qnl0yuzbt.css';
import '../../css/o/o7jevlg6h.css';
import '../../css/d/di8dn3bsc.css';
import '../../css/p/p21w-1bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b0u3lcc-u"/><path class="fw0as8zpk"/><g class="mc2zb0bvp"><path class="qnl0yuzbt"/><path class="o7jevlg6h"/><path class="di8dn3bsc"/><path class="p21w-1bfy"/></g></g>`,
		"fallback": "solar:layout-list-bold-duotone",
	});
}

export default Component;
