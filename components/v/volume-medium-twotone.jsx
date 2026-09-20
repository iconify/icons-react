import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6xzq.css';
import '../../css/y/ydovum.css';
import '../../css/z/zyfiet.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-u-uo_p.css';
import '../../css/d/d-5-a1ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6xzq ydovum"/><path class="ydovum zyfiet"/>`,
		"fallback": "line-md:volume-medium-twotone",
	});
}

export default Component;
