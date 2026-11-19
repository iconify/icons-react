import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bephy_kqg.css';
import '../../css/r/r0rp8y9ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bephy_kqg"/><path class="r0rp8y9ba"/></g>`,
		"fallback": "andrsrxn:padding-start",
	});
}

export default Component;
