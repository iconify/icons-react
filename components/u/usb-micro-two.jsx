import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i40bz1b-z.css';
import '../../css/w/w5zhu6byd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i40bz1b-z"/><path class="w5zhu6byd"/></g>`,
		"fallback": "icon-park-outline:usb-micro-two",
	});
}

export default Component;
