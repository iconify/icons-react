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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fzmzg_bmc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L17 2C17.2652 2 17.5196 2.1054 17.7071 2.2929L21.7071 6.2929C21.8946 6.4804 22 6.7348 22 7L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
}

.ziuxrxa1d {
  fill-rule: evenodd;
  d: path("M7 4L13 4L13 7L7 7L7 4ZM15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z");
}
</style><g class="cuyn6tgcc"><path class="fzmzg_bmc"/><path clip-rule="evenodd" class="ziuxrxa1d"/></g>`,
		"fallback": "keyline-icons:save-sharp-duotone",
	});
}

export default Component;
