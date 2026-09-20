import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g08-83bag.css';
import '../../css/l/l5gw-ebpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g08-83bag"/><path class="l5gw-ebpk"/></g>`,
		"fallback": "keyline-icons:key-sharp-two-tone",
	});
}

export default Component;
