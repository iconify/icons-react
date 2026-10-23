import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/radalq6ve.css';
import '../../css/p/p1u06yilh.css';
import '../../css/w/w06-3acty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="radalq6ve"/><path class="p1u06yilh"/><path class="w06-3acty"/></g>`,
		"fallback": "matita:target",
	});
}

export default Component;
