import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3wa9ccwz.css';
import '../../css/x/x504fpbyz.css';
import '../../css/f/frbawzy9o.css';
import '../../css/e/etujzkb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3wa9ccwz"/><path class="x504fpbyz"/><path class="frbawzy9o"/><path class="etujzkb0n"/></g>`,
		"fallback": "reicon:users2-duotone",
	});
}

export default Component;
