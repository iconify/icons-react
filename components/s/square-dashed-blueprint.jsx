import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ka27c-bva.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/n/ncvxbdbpd.css';
import '../../css/q/q294q2b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ka27c-bva wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ncvxbdbpd"/><path class="q294q2b5s"/></g>`,
		"fallback": "withicons:square-dashed-blueprint",
	});
}

export default Component;
