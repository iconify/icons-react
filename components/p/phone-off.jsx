import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ev4kgfbxa.css';
import '../../css/c/c5sn43wmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ev4kgfbxa"/><path class="c5sn43wmm"/></g>`,
		"fallback": "icon-park:phone-off",
	});
}

export default Component;
