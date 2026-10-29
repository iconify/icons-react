import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i_gbtq9gj.css';
import '../../css/h/h4wzpe_dp.css';
import '../../css/s/se-gosbnd.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/c/ciui2qe_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i_gbtq9gj wm-k"/><path class="h4wzpe_dp wm-s"/><path class="se-gosbnd wm-shadow"/><path class="gz4rmvf3e wm-k"/><path class="ciui2qe_b wm-s"/></g>`,
		"fallback": "withicons:text-sparkles-engrave",
	});
}

export default Component;
