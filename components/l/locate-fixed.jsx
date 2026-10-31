import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2tmhbc7k.css';
import '../../css/y/yuoi656tt.css';
import '../../css/w/wijmmnbcb.css';
import '../../css/f/fw6wdobuc.css';
import '../../css/q/q9-qsojcc.css';
import '../../css/y/y58gf5blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k2tmhbc7k wm-shadow"/><path class="yuoi656tt"/><path class="wijmmnbcb"/><path class="fw6wdobuc"/><path class="q9-qsojcc"/><path class="y58gf5blg"/></g>`,
		"fallback": "withicons-retro:locate-fixed",
	});
}

export default Component;
