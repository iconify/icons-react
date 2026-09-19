import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dqadebc-s.css';
import '../../css/d/dzw_0_kuo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="dqadebc-s"/><path class="dzw_0_kuo"/></g>`,
		"fallback": "garden:location-stroke-16",
	});
}

export default Component;
