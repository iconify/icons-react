import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iou39of8p.css';
import '../../css/j/jd_xr_qqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iou39of8p"/><path class="jd_xr_qqw"/></g>`,
		"fallback": "streamline-ultimate:rating-star-ribbon",
	});
}

export default Component;
