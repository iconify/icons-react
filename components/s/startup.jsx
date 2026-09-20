import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g8td8zq9j.css';
import '../../css/b/b57t4ujhz.css';
import '../../css/e/e2v-77bvv.css';
import '../../css/y/yp2jt6bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g8td8zq9j"/><path class="b57t4ujhz"/><path class="e2v-77bvv"/><path class="yp2jt6bdl"/></g>`,
		"fallback": "streamline-sharp-color:startup",
	});
}

export default Component;
