import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t7vsleb5b.css';
import '../../css/l/lb1sgy-ar.css';
import '../../css/n/nge5cfbll.css';
import '../../css/y/yqgynubyt.css';
import '../../css/x/x_epi-buc.css';
import '../../css/x/xn00lztcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t7vsleb5b wm-deco"/><path class="lb1sgy-ar wm-deco"/><path class="nge5cfbll wm-deco"/><path class="wm-k yqgynubyt"/><path class="wm-a x_epi-buc"/><path class="wm-k xn00lztcf"/></g>`,
		"fallback": "withicons:text-search-blueprint",
	});
}

export default Component;
