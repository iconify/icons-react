import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9pma4byw.css';
import '../../css/n/nw2o_v4gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u9pma4byw"/><path class="nw2o_v4gp"/></g>`,
		"fallback": "hugeicons:map-pin-plus-inside",
	});
}

export default Component;
