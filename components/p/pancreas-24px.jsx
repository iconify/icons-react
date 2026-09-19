import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6at_8wkg.css';
import '../../css/u/urkuowb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6at_8wkg"/><path class="urkuowb2f"/></g>`,
		"fallback": "healthicons:pancreas-24px",
	});
}

export default Component;
