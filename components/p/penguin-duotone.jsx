import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sskj-se3r.css';
import '../../css/j/jxhb3cbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sskj-se3r"/><path class="jxhb3cbbg primary"/></g>`,
		"fallback": "iconaut:penguin-duotone",
	});
}

export default Component;
