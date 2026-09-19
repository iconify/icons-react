import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/prs0duycp.css';
import '../../css/g/gx1_alb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="prs0duycp"/><path class="gx1_alb1r"/></g>`,
		"fallback": "hugeicons:lamp-wall-down",
	});
}

export default Component;
