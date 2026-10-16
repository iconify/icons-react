import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s06stoqvb.css';
import '../../css/a/a4mzgpb9x.css';
import '../../css/q/q0dugcn8n.css';
import '../../css/i/iiwbi_z5o.css';
import '../../css/k/k25m69jau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s06stoqvb"/><path class="a4mzgpb9x"/><path class="q0dugcn8n"/><path class="iiwbi_z5o"/><path class="k25m69jau"/></g>`,
		"fallback": "andrsrxn:passcode-check",
	});
}

export default Component;
