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
		"content": `<style>.bhbkaub3h {
  fill: currentColor;
  d: path("M14 3v6h7V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ils4s2bwq {
  d: path("M14 3v6h7V3Z");
}

.ldbufzbne {
  d: path("M4 13v8h16v-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.qqfu2d8ae {
  d: path("M3 3v6h7V3Z");
}

.wq-xybcpx {
  fill: currentColor;
  d: path("M3 3v6h7V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="nrj6p8qat"><path class="wq-xybcpx"/><path class="bhbkaub3h"/><path class="qqfu2d8ae"/><path class="ils4s2bwq"/><path class="zugrvnb7t"/><path class="ldbufzbne"/><path class="ok9ioqb8x"/></g>`,
		"fallback": "iconmind:kitchen-duotone-regular",
	});
}

export default Component;
