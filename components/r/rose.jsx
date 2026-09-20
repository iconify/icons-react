import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-fktcb6u.css';
import '../../css/r/r0p3f-vov.css';
import '../../css/z/z2vhr6wvl.css';
import '../../css/m/m6h13lbkb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w-fktcb6u"/><path class="r0p3f-vov"/><path class="z2vhr6wvl"/><path class="m6h13lbkb"/></g>`,
		"fallback": "streamline-color:rose",
	});
}

export default Component;
