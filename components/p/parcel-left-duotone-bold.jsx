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
		"content": `<style>.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s9i-unr8j {
  fill: currentColor;
  d: path("M6 7v8h12V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tla8vyn6c {
  d: path("M12 7v8");
}

.zrvo9u_3y {
  d: path("M6 7v8h12V7Z");
}
</style><g class="s0phu2bbs"><path class="s9i-unr8j"/><path class="zrvo9u_3y"/><path class="tla8vyn6c"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:parcel-left-duotone-bold",
	});
}

export default Component;
