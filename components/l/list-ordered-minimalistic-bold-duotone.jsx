import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/o7greeb4r.css';
import '../../css/p/pgsx8ub-o.css';
import '../../css/z/zngrk6exs.css';
import '../../css/r/r-jnwm4iw.css';
import '../../css/a/a6po9pbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="o7greeb4r"/><path class="pgsx8ub-o"/><path class="zngrk6exs"/></g><path class="r-jnwm4iw"/><path class="a6po9pbyl"/></g>`,
		"fallback": "solar:list-ordered-minimalistic-bold-duotone",
	});
}

export default Component;
