import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/n/nvd001kpk.css';
import '../../css/e/esx_dabgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="nvd001kpk wm-a"/><path class="esx_dabgb wm-a"/></g>`,
		"fallback": "withicons:volleyball",
	});
}

export default Component;
