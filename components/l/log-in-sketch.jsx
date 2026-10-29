import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l4ne79z1h.css';
import '../../css/o/ok0419bhs.css';
import '../../css/v/vt7mo6bvk.css';
import '../../css/t/tfxarxbqc.css';
import '../../css/o/owcf405tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l4ne79z1h"/><path class="ok0419bhs wm-k"/><path class="vt7mo6bvk wm-a"/><path class="tfxarxbqc wm-k"/><path class="owcf405tn wm-a"/></g>`,
		"fallback": "withicons:log-in-sketch",
	});
}

export default Component;
