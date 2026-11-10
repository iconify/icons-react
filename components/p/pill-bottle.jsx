import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6r-0tb0y.css';
import '../../css/m/mpb01cb9t.css';
import '../../css/a/ad7qzcbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r6r-0tb0y"/><path class="mpb01cb9t"/><path class="ad7qzcbfn"/></g>`,
		"fallback": "andrsrxn:pill-bottle",
	});
}

export default Component;
