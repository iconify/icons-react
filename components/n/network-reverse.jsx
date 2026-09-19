import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwx6lbcne.css';
import '../../css/v/vh_i6z9mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect transform="matrix(1 0 0 -1 3 22)" class="bwx6lbcne"/><rect transform="matrix(1 0 0 -1 8.5 7)" class="bwx6lbcne"/><rect transform="matrix(1 0 0 -1 14 22)" class="bwx6lbcne"/><path class="vh_i6z9mv"/></g>`,
		"fallback": "iconoir:network-reverse",
	});
}

export default Component;
