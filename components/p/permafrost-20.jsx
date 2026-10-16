import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb3dwjb-x.css';
import '../../css/w/ws2z2pb6w.css';
import '../../css/o/o8u3-vbsf.css';
import '../../css/l/l3upj4-7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb3dwjb-x"/><path class="ws2z2pb6w"/><path class="o8u3-vbsf"/><path class="l3upj4-7r"/>`,
		"fallback": "energy-icons:permafrost-20",
	});
}

export default Component;
