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
		"content": `<style>.icnh1achk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.46 8.67l15.08-4.09q1.21-.33 1.21.92V20q0 1.25-1.25 1.25h-15q-1.25 0-1.25-1.25v-9.75q0-1.25 1.21-1.58");
}

.kqd5ziwbj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 17.25h.01");
}

.tgs84gbvq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 21.25v-8.5h5v8.5");
}

.x72qkbb_a {
  width: 3.5px;
  height: 3.5px;
  x: 6.25px;
  y: 12.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="icnh1achk"/><rect class="x72qkbb_a"/><path class="tgs84gbvq"/><path class="kqd5ziwbj"/></g>`,
		"fallback": "iconoven:shed",
	});
}

export default Component;
