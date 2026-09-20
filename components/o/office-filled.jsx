import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/in8zjxbij.css';
import '../../css/t/tr13-2f7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="in8zjxbij"/><path clip-rule="evenodd" class="tr13-2f7b"/></g>`,
		"fallback": "reicon:office-filled",
	});
}

export default Component;
