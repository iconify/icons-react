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
		"content": `<style>.gzk5d2xwl {
  cx: 12px;
  cy: 15.25px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ham-4mshf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 18.25h.01m3.49 0h.01");
}

.mzpshbbyo {
  width: 4px;
  height: 3.5px;
  x: 10px;
  y: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.ohm1l3sxk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5v2.75");
}

.x1jpzin5b {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.25h12");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="mzpshbbyo"/><path class="ohm1l3sxk"/><circle class="gzk5d2xwl"/><path class="x1jpzin5b"/><path class="ham-4mshf"/></g>`,
		"fallback": "iconoven:tea-infuser",
	});
}

export default Component;
