import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7dis8b7o.css';
import '../../css/r/rrc6spb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7dis8b7o"/><path class="rrc6spb9o"/></g>`,
		"fallback": "reicon:toggle-filled",
	});
}

export default Component;
