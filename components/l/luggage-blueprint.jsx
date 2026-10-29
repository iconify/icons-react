import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hizp_mtjz.css';
import '../../css/u/ursbocc_c.css';
import '../../css/t/tvxwcob7h.css';
import '../../css/j/j1vumrv1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hizp_mtjz wm-deco"/><path class="ursbocc_c wm-deco"/><path class="tvxwcob7h wm-k"/><path class="j1vumrv1z wm-a"/></g>`,
		"fallback": "withicons:luggage-blueprint",
	});
}

export default Component;
