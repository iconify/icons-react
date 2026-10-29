import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/imiakvw_g.css';
import '../../css/t/tu_4g2b_u.css';
import '../../css/g/gg_32isdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="imiakvw_g"/><path class="tu_4g2b_u wm-a"/><path class="gg_32isdr wm-s"/></g>`,
		"fallback": "withicons:users-plus-solid",
	});
}

export default Component;
