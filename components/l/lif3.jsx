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
		"content": `<style>.apkj_ev-s {
  d: path("M10.403 4.648A1.705 1.705 0 0 1 12 3.563c.709 0 1.35.433 1.598 1.085l5.377 13.54H21v2.25h-3.937L12 6.938l-5.063 13.5H3v-2.25h2.025z");
}

.darxqh9zt {
  stop-color: var(--svg-color--294874, #294874);
}

.ft5dv1b6b {
  fill: none;
}

.z86b6gbvz {
  stop-color: var(--svg-color--749fc1, #749fc1);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGw9JMebUX)" class="apkj_ev-s"/><defs><linearGradient id="SVGw9JMebUX" x1="6.375" x2="16.886" y1="5.069" y2="19.439" gradientUnits="userSpaceOnUse"><stop class="z86b6gbvz"/><stop offset=".49" class="darxqh9zt"/></linearGradient></defs></g>`,
		"fallback": "token-branded:lif3",
	});
}

export default Component;
