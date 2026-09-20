import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuj5cf5fk.css';
import '../../css/f/fg7suuu6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xuj5cf5fk"/><path class="fg7suuu6x"/></g>`,
		"fallback": "reicon:rewind-duotone",
	});
}

export default Component;
