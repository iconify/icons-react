import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgisvlbog.css';
import '../../css/z/zvg2rktig.css';
import '../../css/v/v_9vh15ie.css';
import '../../css/j/j85imv7kt.css';
import '../../css/s/s50fz_25z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgisvlbog"/><path class="zvg2rktig"/><path class="v_9vh15ie"/><path class="j85imv7kt"/><path class="s50fz_25z"/></g>`,
		"fallback": "hugeicons:no-internet",
	});
}

export default Component;
