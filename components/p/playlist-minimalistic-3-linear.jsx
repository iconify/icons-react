import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh8nsabqb.css';
import '../../css/b/b8qhkbcan.css';
import '../../css/e/eayvs1m_n.css';
import '../../css/d/d_y_0lfcd.css';
import '../../css/s/srbmx6fzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uh8nsabqb"/><path class="b8qhkbcan"/><path class="eayvs1m_n"/><path class="d_y_0lfcd"/><path class="srbmx6fzm"/></g>`,
		"fallback": "solar:playlist-minimalistic-3-linear",
	});
}

export default Component;
