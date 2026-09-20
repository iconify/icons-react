import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bjogh6b3n.css';
import '../../css/h/hlqi7zbwo.css';
import '../../css/m/m-unu3bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="bjogh6b3n"/><path class="hlqi7zbwo"/></g><path class="m-unu3bmk"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-bold-duotone",
	});
}

export default Component;
