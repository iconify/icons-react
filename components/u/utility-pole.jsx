import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ova0bvb-a.css';
import '../../css/i/iey8wgbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ova0bvb-a"/><path class="iey8wgbwt"/></g>`,
		"fallback": "hugeicons:utility-pole",
	});
}

export default Component;
