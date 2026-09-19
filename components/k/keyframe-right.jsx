import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fg816bb5j.css';
import '../../css/n/nn3zcebwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fg816bb5j"/><path class="nn3zcebwe"/></g>`,
		"fallback": "hugeicons:keyframe-right",
	});
}

export default Component;
