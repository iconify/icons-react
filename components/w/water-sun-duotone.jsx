import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3f0irb7g.css';
import '../../css/f/fn34yvb4k.css';
import '../../css/b/bb2etvm-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q3f0irb7g"/><path class="fn34yvb4k"/><path class="bb2etvm-d"/></g>`,
		"fallback": "reicon:water-sun-duotone",
	});
}

export default Component;
