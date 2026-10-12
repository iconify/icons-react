import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cikifp7fy.css';
import '../../css/h/hx2udbbhq.css';
import '../../css/j/jq02r_ppe.css';
import '../../css/k/k9gkv395o.css';
import '../../css/r/r9be36bzi.css';
import '../../css/u/uaqpgdb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cikifp7fy"/><path class="hx2udbbhq"/><path class="jq02r_ppe"/><path class="k9gkv395o"/><path class="r9be36bzi"/><path class="uaqpgdb6y"/></g>`,
		"fallback": "lucide-extended:sticky-notes-duotone",
	});
}

export default Component;
