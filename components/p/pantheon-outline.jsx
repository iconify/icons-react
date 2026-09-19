import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/necufhi6r.css';
import '../../css/x/xuaiitbah.css';
import '../../css/c/cmjkozb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="necufhi6r"/><rect transform="matrix(1 0 0 -1 4.5 19.5)" class="xuaiitbah"/><rect transform="matrix(1 0 0 -1 6 15.5)" class="cmjkozb_n"/><rect transform="matrix(1 0 0 -1 16 15.5)" class="cmjkozb_n"/><rect transform="matrix(1 0 0 -1 11 15.5)" class="cmjkozb_n"/></g>`,
		"fallback": "bitcoin-icons:pantheon-outline",
	});
}

export default Component;
