import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnfzppszj.css';
import '../../css/m/m5_8fizax.css';
import '../../css/w/w3_6o9kxf.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnfzppszj"/><rect transform="matrix(0 -1 -1 0 20.19 20.82)" class="m5_8fizax"/><path class="w3_6o9kxf"/><path class="qhkj8rbdk"/></g>`,
		"fallback": "andrsrxn:wardrobe",
	});
}

export default Component;
