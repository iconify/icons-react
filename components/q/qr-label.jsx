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
		"content": `<style>.eazwxqb_q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5a2 2 0 0 1 2 2v9.5l-7 7h-9.5a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2");
}

.ll51ctcxy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.25 14.25h-5a2 2 0 0 0-2 2v5Zm-15-8h3.5v3.5h-3.5Zm8 0h3.5v3.5h-3.5Zm-8 8h3.5v3.5h-3.5Z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="eazwxqb_q"/><path class="ll51ctcxy"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:qr-label",
	});
}

export default Component;
