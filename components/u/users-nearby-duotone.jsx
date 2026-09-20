import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cv40bhlsq.css';
import '../../css/c/ch1ctkp8j.css';
import '../../css/l/lb3khzbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cv40bhlsq"/><path clip-rule="evenodd" class="ch1ctkp8j"/><path class="lb3khzbez"/></g>`,
		"fallback": "reicon:users-nearby-duotone",
	});
}

export default Component;
