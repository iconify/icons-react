import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8pgu-b0i.css';
import '../../css/f/fy6rj9gqt.css';
import '../../css/h/hsqbyacrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8pgu-b0i"/><path class="fy6rj9gqt"/><path clip-rule="evenodd" class="hsqbyacrl"/></g>`,
		"fallback": "reicon:vacuum-duotone",
	});
}

export default Component;
