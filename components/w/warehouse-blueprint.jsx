import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzefylb1g.css';
import '../../css/d/d28o-jbom.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/v/vbsgrw04e.css';
import '../../css/g/g3_i1_bjs.css';
import '../../css/l/lwj7cru1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vzefylb1g wm-deco"/><path class="d28o-jbom wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="vbsgrw04e wm-k"/><path class="g3_i1_bjs wm-a"/><path class="lwj7cru1z wm-k"/></g>`,
		"fallback": "withicons:warehouse-blueprint",
	});
}

export default Component;
