import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s8izyxzyl.css';
import '../../css/y/ycbr2ubsi.css';
import '../../css/o/oqga-sb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s8izyxzyl"/><path class="ycbr2ubsi"/><path clip-rule="evenodd" class="oqga-sb1p"/></g>`,
		"fallback": "keyline-icons:piggy-bank-sharp-duotone",
	});
}

export default Component;
