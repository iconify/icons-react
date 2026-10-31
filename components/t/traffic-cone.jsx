import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w75-t3t6a.css';
import '../../css/n/ncvrrob_j.css';
import '../../css/j/jx5h_ob3s.css';
import '../../css/y/yc_5pub0i.css';
import '../../css/r/rkfvwvb5b.css';
import '../../css/j/jyyhf2kxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w75-t3t6a wm-shadow"/><path class="ncvrrob_j"/><path class="jx5h_ob3s"/><path class="yc_5pub0i"/><path class="rkfvwvb5b"/><path class="jyyhf2kxp"/></g>`,
		"fallback": "withicons-retro:traffic-cone",
	});
}

export default Component;
