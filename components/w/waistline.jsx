import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/blfz05bsp.css';
import '../../css/j/jsiqlubia.css';
import '../../css/a/aq85sxbdm.css';
import '../../css/r/ree6hhnkg.css';
import '../../css/e/e_di3rplc.css';
import '../../css/d/dttwowbco.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="blfz05bsp"/><circle class="jsiqlubia"/><path class="aq85sxbdm"/><path class="ree6hhnkg"/><path class="e_di3rplc"/><path class="dttwowbco"/></g>`,
		"fallback": "icon-park:waistline",
	});
}

export default Component;
