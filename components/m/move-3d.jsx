import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-fz7yb1g.css';
import '../../css/b/befbkebdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f-fz7yb1g"/><path class="befbkebdq"/></g>`,
		"fallback": "hugeicons:move-3d",
	});
}

export default Component;
