import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n060wrb-o.css';
import '../../css/v/vexbc1b_g.css';
import '../../css/j/j6xpl_b5y.css';
import '../../css/b/bfklh_btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n060wrb-o wm-k"/><path class="vexbc1b_g wm-a"/><path class="j6xpl_b5y wm-k"/><path class="bfklh_btr wm-a"/></g>`,
		"fallback": "withicons:microscope-sketch",
	});
}

export default Component;
