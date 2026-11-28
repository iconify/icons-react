import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uopia5b9k.css';
import '../../css/m/md-mjbc3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uopia5b9k"/><path class="md-mjbc3r primary"/></g>`,
		"fallback": "iconaut:lamp-ceiling-duotone",
	});
}

export default Component;
