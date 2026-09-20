import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fi7im-gbd.css';
import '../../css/w/wg_gbnxhr.css';
import '../../css/r/rb1oaubws.css';
import '../../css/v/v7-7i6bkq.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="fi7im-gbd"/><path clip-rule="evenodd" class="wg_gbnxhr"/></g><path class="rb1oaubws"/><path clip-rule="evenodd" class="v7-7i6bkq"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:list-circle",
	});
}

export default Component;
