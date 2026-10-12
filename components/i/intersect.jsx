import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nynfcwllb.css';
import '../../css/l/lz9d_d32h.css';
import '../../css/y/y9omin-0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nynfcwllb"/><rect class="lz9d_d32h"/><rect class="y9omin-0b"/></g>`,
		"fallback": "andrsrxn:intersect",
	});
}

export default Component;
