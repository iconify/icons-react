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
		"content": `<style>.fzvmmb14m {
  cx: 8.75px;
  cy: 15.25px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwhx5sb4u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 15.25h.01");
}

.u8swf-b_j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.69 10.73L18.5 4.1m-1.51-1.31l3.02 2.62");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="fzvmmb14m"/><path class="lwhx5sb4u"/><path class="u8swf-b_j"/></g>`,
		"fallback": "iconoven:measuring-wheel",
	});
}

export default Component;
