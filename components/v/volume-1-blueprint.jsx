import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lxrhnunmy.css';
import '../../css/y/y8trhedqw.css';
import '../../css/f/fz_4tjbyu.css';
import '../../css/y/ydfqvnb5a.css';
import '../../css/t/t3k6m9l_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lxrhnunmy wm-deco"/><path class="wm-deco y8trhedqw"/><path class="fz_4tjbyu wm-k"/><path class="wm-a ydfqvnb5a"/><path class="t3k6m9l_o wm-a"/></g>`,
		"fallback": "withicons:volume-1-blueprint",
	});
}

export default Component;
