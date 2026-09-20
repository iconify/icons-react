import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hofj0bbhg.css';
import '../../css/s/scumg8b4j.css';
import '../../css/k/ka-owj1yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hofj0bbhg"/><path class="scumg8b4j"/><path clip-rule="evenodd" class="ka-owj1yr"/></g>`,
		"fallback": "reicon:thumbtack-list-duotone",
	});
}

export default Component;
