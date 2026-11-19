import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffgrtx06n.css';
import '../../css/v/vm6sxcbbp.css';
import '../../css/w/wnk1uswsx.css';
import '../../css/n/nr8egexwf.css';
import '../../css/i/ifcu0cbmg.css';
import '../../css/f/fvg28db7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffgrtx06n"/><path class="vm6sxcbbp"/><path class="wnk1uswsx"/><path class="nr8egexwf"/><path class="ifcu0cbmg"/><path class="fvg28db7s"/></g>`,
		"fallback": "andrsrxn:ribbon-heart",
	});
}

export default Component;
