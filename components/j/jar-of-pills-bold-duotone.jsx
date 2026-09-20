import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ybg_29aft.css';
import '../../css/e/e0oiq1b4b.css';
import '../../css/m/mdm1hib7l.css';
import '../../css/t/t2dm15bhr.css';
import '../../css/c/clmipqbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ybg_29aft"/><path class="e0oiq1b4b"/></g><path class="mdm1hib7l"/><path class="t2dm15bhr"/><path class="clmipqbnq"/></g>`,
		"fallback": "solar:jar-of-pills-bold-duotone",
	});
}

export default Component;
