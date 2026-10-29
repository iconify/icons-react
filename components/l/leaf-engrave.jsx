import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bvhvd8q7c.css';
import '../../css/r/rddu-sewe.css';
import '../../css/u/uu1_fv33n.css';
import '../../css/p/pg6c6hbqu.css';
import '../../css/m/mp77goa1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bvhvd8q7c wm-k"/><path class="rddu-sewe wm-a"/><path class="uu1_fv33n wm-shadow"/><path class="pg6c6hbqu wm-k"/><path class="mp77goa1w wm-a"/></g>`,
		"fallback": "withicons:leaf-engrave",
	});
}

export default Component;
