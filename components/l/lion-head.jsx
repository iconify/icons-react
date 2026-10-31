import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nljvcdb6q.css';
import '../../css/s/ssq5wczzl.css';
import '../../css/x/xr9shx81h.css';
import '../../css/u/ue5iehlfe.css';
import '../../css/t/tymb60b_r.css';
import '../../css/o/olnsx5brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nljvcdb6q wm-shadow"/><path class="ssq5wczzl wm-shadow"/><path class="xr9shx81h"/><path class="ue5iehlfe"/><path class="tymb60b_r"/><path class="olnsx5brp wm-s"/></g>`,
		"fallback": "withicons-brutal:lion-head",
	});
}

export default Component;
