import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_vfulbig.css';
import '../../css/f/fyzqmibvv.css';
import '../../css/z/z1yj6sbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l_vfulbig"/><path class="fyzqmibvv"/><path class="z1yj6sbtc"/></g>`,
		"fallback": "solar:waterdrops-linear",
	});
}

export default Component;
