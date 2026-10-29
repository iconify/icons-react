import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v3c0odnjd.css';
import '../../css/g/gwpevo8qp.css';
import '../../css/o/o0m_us_lw.css';
import '../../css/r/rqi-mcbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v3c0odnjd"/><path class="gwpevo8qp wm-k"/><path class="o0m_us_lw wm-k"/><path class="rqi-mcbpo wm-a"/></g>`,
		"fallback": "withicons:megaphone-sketch",
	});
}

export default Component;
