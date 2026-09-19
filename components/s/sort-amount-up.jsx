import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px411qbye.css';
import '../../css/m/mobfej3oa.css';
import '../../css/n/nmxnfxicr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px411qbye"/><path class="mobfej3oa"/><path class="nmxnfxicr"/></g>`,
		"fallback": "glyphs-poly:sort-amount-up",
	});
}

export default Component;
