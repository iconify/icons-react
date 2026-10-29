import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xx73ektwa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/d0osgib0z.css';
import '../../css/v/v53iuq7wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xx73ektwa"/><path class="cf3uzcrzx wm-deco"/><path class="d0osgib0z wm-k"/><path class="v53iuq7wc wm-s"/></g>`,
		"fallback": "withicons:phone-off-blueprint",
	});
}

export default Component;
