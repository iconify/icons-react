import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl_l48dcr.css';
import '../../css/v/vrio1vbcf.css';
import '../../css/k/kdgt5ac4e.css';
import '../../css/a/ak0v_fljm.css';
import '../../css/q/q-0tevbrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-rule="evenodd" class="bl_l48dcr"><path class="vrio1vbcf"/><path class="kdgt5ac4e"/></g><circle class="ak0v_fljm"/><path class="q-0tevbrd"/></g>`,
		"fallback": "pepicons-print:person",
	});
}

export default Component;
