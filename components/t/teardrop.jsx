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
		"content": `<style>.i68fcw4ww {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20 4l-2.14 10.41a7 7 0 1 1-8.27-8.27Z");
}

.x3tv9rxpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 13h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i68fcw4ww"/><path class="x3tv9rxpu"/></g>`,
		"fallback": "iconoven:teardrop",
	});
}

export default Component;
