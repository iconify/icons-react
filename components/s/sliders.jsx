import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcio2-jru.css';
import '../../css/b/bjc88209d.css';
import '../../css/t/t52m0pb7p.css';
import '../../css/h/h5k7alb4s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcio2-jru"/><rect class="bjc88209d"/><rect class="t52m0pb7p"/><rect class="h5k7alb4s"/></g>`,
		"fallback": "glyphs-poly:sliders",
	});
}

export default Component;
