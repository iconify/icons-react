import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i75qe831z.css';
import '../../css/w/wyuv2ql0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i75qe831z"/><path clip-rule="evenodd" class="wyuv2ql0j"/></g>`,
		"fallback": "griddy-icons:private-driver",
	});
}

export default Component;
