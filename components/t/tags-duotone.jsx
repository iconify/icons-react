import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_2eyub1q.css';
import '../../css/r/ryau1hbhw.css';
import '../../css/t/t1ixq1bky.css';
import '../../css/w/wjj3ah6fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_2eyub1q"/><path class="ryau1hbhw"/><path class="t1ixq1bky"/><path class="wjj3ah6fv"/></g>`,
		"fallback": "lucide-extended:tags-duotone",
	});
}

export default Component;
