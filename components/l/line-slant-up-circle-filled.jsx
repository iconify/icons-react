import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/l/lxon93b6t.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGDHZoze2M"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="lxon93b6t"/></mask></defs><circle mask="url(#SVGDHZoze2M)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:line-slant-up-circle-filled",
	});
}

export default Component;
