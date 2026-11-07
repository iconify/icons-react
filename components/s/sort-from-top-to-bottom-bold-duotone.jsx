import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0u0gldjc.css';
import '../../css/w/w7jfgob2q.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rtvzzmbld.css';
import '../../css/x/xnl3i3bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0u0gldjc"/><path class="w7jfgob2q"/><g class="xtpeb-edw"><path class="rtvzzmbld"/><path class="xnl3i3bcu"/></g>`,
		"fallback": "solar:sort-from-top-to-bottom-bold-duotone",
	});
}

export default Component;
