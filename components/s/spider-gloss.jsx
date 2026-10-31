import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njb96lsbu.css';
import '../../css/p/pb8o7t_sy.css';
import '../../css/m/myhs4_ibh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="njb96lsbu wm-k"/><path class="pb8o7t_sy wm-a"/><path class="myhs4_ibh wm-s"/></g>`,
		"fallback": "withicons:spider-gloss",
	});
}

export default Component;
