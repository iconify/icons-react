import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7_pz2buh.css';
import '../../css/l/l77w80irr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7_pz2buh"/><path class="l77w80irr"/></g>`,
		"fallback": "reicon:music-square-filled",
	});
}

export default Component;
