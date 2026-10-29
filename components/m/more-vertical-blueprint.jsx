import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/w/wt83_uq-x.css';
import '../../css/r/r3nv32hqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="wm-deco wt83_uq-x"/><path class="r3nv32hqm"/></g>`,
		"fallback": "withicons:more-vertical-blueprint",
	});
}

export default Component;
