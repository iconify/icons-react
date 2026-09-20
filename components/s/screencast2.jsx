import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m8g8adenb.css';
import '../../css/y/ynit9yb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m8g8adenb"/><path clip-rule="evenodd" class="ynit9yb9x"/></g>`,
		"fallback": "reicon:screencast2",
	});
}

export default Component;
