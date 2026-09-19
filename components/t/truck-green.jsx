import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdp5dobft.css';
import '../../css/m/m9oyuabbp.css';
import '../../css/w/wr6g3jo2n.css';
import '../../css/y/yu4vwwb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pdp5dobft"/><path class="m9oyuabbp"/><path class="wr6g3jo2n"/><path class="yu4vwwb6d"/></g>`,
		"fallback": "iconoir:truck-green",
	});
}

export default Component;
