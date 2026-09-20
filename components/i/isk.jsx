import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bwyzp35jz {
  stop-color: var(--svg-color--6691da, #6691da);
}

.cb_2bmn7s {
  stop-color: var(--svg-color--2baaea, #2baaea);
}

.ft5dv1b6b {
  fill: none;
}

.nllcsxbel {
  stop-color: var(--svg-color--003a9f, #003a9f);
}

.t8o9bgbpc {
  stop-color: var(--svg-color--fa2a9b, #fa2a9b);
}

.xd3miybym {
  d: path("m11.896 3l6.688 6.556a3.3 3.3 0 0 1 0 4.737l-2.06 2.018l-4.624-4.534A6.123 6.123 0 0 1 11.9 3zm.208 18l-6.688-6.556a3.3 3.3 0 0 1 0-4.737l2.06-2.018l4.623 4.534a6.125 6.125 0 0 1 0 8.777z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGo5rHxemN)" class="xd3miybym"/><defs><linearGradient id="SVGo5rHxemN" x1="16.294" x2="6.692" y1="3.993" y2="19.654" gradientUnits="userSpaceOnUse"><stop class="t8o9bgbpc"/><stop offset=".39" class="bwyzp35jz"/><stop offset=".57" class="cb_2bmn7s"/><stop offset="1" class="nllcsxbel"/></linearGradient></defs></g>`,
		"fallback": "token-branded:isk",
	});
}

export default Component;
