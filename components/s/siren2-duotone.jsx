import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqtv3ubyr.css';
import '../../css/i/izc5voywf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqtv3ubyr"/><path class="izc5voywf"/></g>`,
		"fallback": "reicon:siren2-duotone",
	});
}

export default Component;
