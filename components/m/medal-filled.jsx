import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj9cdbcjg.css';
import '../../css/g/gxfyrqbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj9cdbcjg"/><path class="gxfyrqbef"/></g>`,
		"fallback": "reicon:medal-filled",
	});
}

export default Component;
