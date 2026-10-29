import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y543w2xot.css';
import '../../css/f/fcwbjtbjp.css';
import '../../css/u/u4bse819v.css';
import '../../css/o/oy4kjja7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y543w2xot"/><path class="fcwbjtbjp"/><path class="u4bse819v wm-a"/><path class="oy4kjja7d"/></g>`,
		"fallback": "withicons:puja-thali",
	});
}

export default Component;
