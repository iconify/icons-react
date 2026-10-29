import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/i/ilfa0royq.css';
import '../../css/g/g5v2cub2h.css';
import '../../css/x/xg1efac-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="ilfa0royq wm-k"/><path class="g5v2cub2h wm-k"/><path class="wm-a xg1efac-d"/></g>`,
		"fallback": "withicons:sparkler-blueprint",
	});
}

export default Component;
