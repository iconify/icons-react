import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0l07qbna.css';
import '../../css/a/al-whqb_a.css';
import '../../css/j/j8asiur5l.css';
import '../../css/u/ujtbxbctu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k0l07qbna wm-k"/><path class="al-whqb_a wm-a"/><path class="j8asiur5l wm-k"/><path class="ujtbxbctu wm-a"/></g>`,
		"fallback": "withicons:radio-tower-sketch",
	});
}

export default Component;
