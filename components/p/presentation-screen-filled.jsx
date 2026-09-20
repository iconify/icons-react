import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x200p5olh.css';
import '../../css/e/em7taqccy.css';
import '../../css/g/gue0_kbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x200p5olh"/><rect class="em7taqccy"/><path class="gue0_kbzj"/></g>`,
		"fallback": "reicon:presentation-screen-filled",
	});
}

export default Component;
