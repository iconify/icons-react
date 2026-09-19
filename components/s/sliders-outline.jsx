import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dt4y0wldq.css';
import '../../css/w/w52sjdwjn.css';
import '../../css/u/ua2rz5bkn.css';
import '../../css/x/x_27_2b3h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dt4y0wldq"/><path class="w52sjdwjn"/><path class="ua2rz5bkn"/><path class="x_27_2b3h"/></g>`,
		"fallback": "glyphs:sliders-outline",
	});
}

export default Component;
