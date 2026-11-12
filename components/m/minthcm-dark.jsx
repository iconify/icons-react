import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipg2vo4ij.css';
import '../../css/k/k5qttyb_s.css';
import '../../css/g/g_ygldbdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipg2vo4ij"/><path class="k5qttyb_s"/><path class="g_ygldbdz"/>`,
		"fallback": "selfhst:minthcm-dark",
	});
}

export default Component;
