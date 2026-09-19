import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bxg23zbzy.css';
import '../../css/h/h_u7y3bpt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="bxg23zbzy"/><rect class="h_u7y3bpt"/></g>`,
		"fallback": "garden:lock-unlocked-stroke-12",
	});
}

export default Component;
