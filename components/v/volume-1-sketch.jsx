import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2fqzc34l.css';
import '../../css/x/x6wurfbzt.css';
import '../../css/i/iwe_rn_rm.css';
import '../../css/r/ra358_b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g2fqzc34l"/><path class="wm-a x6wurfbzt"/><path class="iwe_rn_rm wm-k"/><path class="ra358_b3i wm-a"/></g>`,
		"fallback": "withicons:volume-1-sketch",
	});
}

export default Component;
