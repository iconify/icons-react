import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkgpzvb0p.css';
import '../../css/p/phamcqwhm.css';
import '../../css/k/k9zg1xb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nkgpzvb0p"/><path class="phamcqwhm"/><path class="k9zg1xb2z"/></g>`,
		"fallback": "andrsrxn:plant",
	});
}

export default Component;
