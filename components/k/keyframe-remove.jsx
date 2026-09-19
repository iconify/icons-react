import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p01jabb-e.css';
import '../../css/h/hchwrjbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p01jabb-e"/><path class="hchwrjbat"/></g>`,
		"fallback": "hugeicons:keyframe-remove",
	});
}

export default Component;
