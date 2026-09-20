import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4trolbvo.css';
import '../../css/h/hcbcxsj0q.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fbhog9-zq.css';
import '../../css/c/cjfc5abjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m4trolbvo"/><path clip-rule="evenodd" class="hcbcxsj0q"/><g class="mc2zb0bvp"><path class="fbhog9-zq"/><path class="cjfc5abjr"/></g></g>`,
		"fallback": "solar:wallpaper-bold-duotone",
	});
}

export default Component;
