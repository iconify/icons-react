import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bikni61mk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/se2-_rn_v.css';
import '../../css/t/tsp104b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bikni61mk"/><g class="xtpeb-edw"><path class="se2-_rn_v"/><path class="tsp104b7p"/></g>`,
		"fallback": "solar:star-fall-2-bold-duotone",
	});
}

export default Component;
