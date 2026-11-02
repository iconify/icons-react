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
		"content": `<style>.al5frjbqc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 15V5a1 1 0 0 1 1-1h8a11 11 0 0 1 8.8 4.4l.325.43c.465.615.945 1.231 1.305 1.915c.366.696.57 1.468.57 2.255c0 .797-.314 1.558-.879 2.121A3 3 0 0 1 19 16H3a1 1 0 0 1-1-1m2-7h4V6H4Zm6 0h6.657A9 9 0 0 0 11 6h-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.up-2ksnci {
  d: path("M21 20H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="al5frjbqc"/><path class="up-2ksnci"/></g>`,
		"fallback": "coolicons:train-side-bulk-sharp",
	});
}

export default Component;
