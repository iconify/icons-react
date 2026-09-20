import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6n_m3bwx.css';
import '../../css/t/tfhy784gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6n_m3bwx"/><path class="tfhy784gq"/></g>`,
		"fallback": "reicon:mute",
	});
}

export default Component;
