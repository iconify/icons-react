import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vskgp64hg.css';
import '../../css/r/rr4ai5b9m.css';
import '../../css/b/baravprgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vskgp64hg"/><path class="rr4ai5b9m"/><path class="baravprgt"/></g>`,
		"fallback": "andrsrxn:plant",
	});
}

export default Component;
