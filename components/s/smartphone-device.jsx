import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpxt3bcgc.css';
import '../../css/j/j-uhwzbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hpxt3bcgc"/><path class="j-uhwzbaq"/></g>`,
		"fallback": "iconoir:smartphone-device",
	});
}

export default Component;
