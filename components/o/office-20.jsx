import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe80ngmuz.css';
import '../../css/a/a0sj_5bhv.css';
import '../../css/r/r_d2c4b7s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe80ngmuz"/><path class="a0sj_5bhv"/><path class="r_d2c4b7s"/>`,
		"fallback": "energy-icons:office-20",
	});
}

export default Component;
