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
		"content": `<style>.dlbgkvyzb {
  fill-rule: evenodd;
  d: path("m12 3l2 1.92l-2 1.9l-2-1.9zm-1.66 7.3c.92.88 2.4.88 3.32 0L19 5l2 1.5V21h-2V8.42l-3.34 3.14c-1 .96-2.34 1.44-3.66 1.44s-2.66-.48-3.66-1.44L5 8.4V21H3V6.5L5 5z");
}

.ft5dv1b6b {
  fill: none;
}

.gb-x_zb_s {
  stop-color: var(--svg-color--fe95ce, #fe95ce);
}

.h35nacbyr {
  stop-color: var(--svg-color--ffb298, #ffb298);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGBonamKFI)" clip-rule="evenodd" class="dlbgkvyzb"/><defs><linearGradient id="SVGBonamKFI" x1="3" x2="99" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop class="h35nacbyr"/><stop offset="1" class="gb-x_zb_s"/></linearGradient></defs></g>`,
		"fallback": "token-branded:mantra",
	});
}

export default Component;
