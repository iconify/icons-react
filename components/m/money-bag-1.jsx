import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcojkkbka.css';
import '../../css/r/rdiwhhl8q.css';
import '../../css/g/gvxzj3vwv.css';
import '../../css/e/elkgm6b7o.css';
import '../../css/e/ec0qndr_t.css';
import '../../css/i/il87e6p1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lcojkkbka"/><path class="rdiwhhl8q"/><path class="gvxzj3vwv"/><path class="elkgm6b7o"/><path class="ec0qndr_t"/><path class="il87e6p1e"/></g>`,
		"fallback": "streamline-cyber-color:money-bag-1",
	});
}

export default Component;
