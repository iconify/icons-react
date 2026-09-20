import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owmyv-bwt.css';
import '../../css/z/zobtaob_b.css';
import '../../css/a/a6h11icdc.css';
import '../../css/p/pts2-acil.css';
import '../../css/j/jkpkp9brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="owmyv-bwt"/><path class="zobtaob_b"/><path class="a6h11icdc"/><path class="pts2-acil"/><path class="jkpkp9brv"/></g>`,
		"fallback": "solar:ssd-round-linear",
	});
}

export default Component;
