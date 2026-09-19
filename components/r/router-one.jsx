import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e96unsile.css';
import '../../css/q/qglkxjbsq.css';
import '../../css/g/gdoio2bod.css';
import '../../css/g/glvn32bhy.css';
import '../../css/z/zzeir6bkc.css';
import '../../css/v/vf9kxbbcl.css';
import '../../css/l/l-1sr1b0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e96unsile"/><path clip-rule="evenodd" class="qglkxjbsq"/><path class="gdoio2bod"/><path clip-rule="evenodd" class="glvn32bhy"/><path class="zzeir6bkc"/><path clip-rule="evenodd" class="vf9kxbbcl"/><path class="l-1sr1b0l"/></g>`,
		"fallback": "icon-park-solid:router-one",
	});
}

export default Component;
