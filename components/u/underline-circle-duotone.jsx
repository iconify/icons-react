import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdporxbhj.css';
import '../../css/n/nycvlbb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdporxbhj"/><path class="nycvlbb_f"/></g>`,
		"fallback": "reicon:underline-circle-duotone",
	});
}

export default Component;
