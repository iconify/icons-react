import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3zf_zbjk.css';
import '../../css/o/o_p7u2d0a.css';
import '../../css/m/mqdf1uo2w.css';
import '../../css/u/ume4id0ov.css';
import '../../css/s/s1acenbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3zf_zbjk wm-k"/><path class="o_p7u2d0a wm-k"/><path class="mqdf1uo2w wm-k"/><path class="ume4id0ov wm-k"/><path class="s1acenbqs wm-shine"/></g>`,
		"fallback": "withicons-anime:shirt",
	});
}

export default Component;
