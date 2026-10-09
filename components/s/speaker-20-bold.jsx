import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0xmcccfl.css';
import '../../css/r/r_8u_eb_k.css';
import '../../css/d/dy97t_1fn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0xmcccfl"/><path class="r_8u_eb_k"/><path class="dy97t_1fn"/>`,
		"fallback": "energy-icons:speaker-20-bold",
	});
}

export default Component;
