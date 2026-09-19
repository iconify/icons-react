import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eh311nzoy.css';
import '../../css/f/fjk1_yb_p.css';
import '../../css/i/iqlx6k-bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eh311nzoy"/><path class="fjk1_yb_p"/><path class="iqlx6k-bs"/></g>`,
		"fallback": "hugeicons:job-search",
	});
}

export default Component;
