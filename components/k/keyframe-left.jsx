import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a3z1eibjw.css';
import '../../css/u/uwu_9s3hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a3z1eibjw"/><path class="uwu_9s3hm"/></g>`,
		"fallback": "hugeicons:keyframe-left",
	});
}

export default Component;
