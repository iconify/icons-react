import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-g4sebdp.css';
import '../../css/r/rgxxgpvpr.css';
import '../../css/f/fl3ji4hnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.3 17.38)" class="p-g4sebdp"/><rect transform="matrix(0 -1 -1 0 22.3 17.38)" class="rgxxgpvpr"/><path class="fl3ji4hnv"/></g>`,
		"fallback": "andrsrxn:passcode",
	});
}

export default Component;
