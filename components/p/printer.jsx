import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd8_o6bwd.css';
import '../../css/u/utla_t21d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wd8_o6bwd"/><path class="utla_t21d"/></g>`,
		"fallback": "at-icons:printer",
	});
}

export default Component;
