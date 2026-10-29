import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vukr31bcm.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vukr31bcm wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="b82dfnb_o wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:octagon-x-blueprint",
	});
}

export default Component;
