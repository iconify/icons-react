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
		"content": `<style>.coye-i88w {
  d: path("M8 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-58-pnpd {
  d: path("M16 8v8");
}

.thkmlu7qy {
  d: path("M3 8h18v8H3Z");
}

.zaintx98k {
  fill: currentColor;
  d: path("M3 8h18v8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zaintx98k"/><path class="thkmlu7qy"/><path class="coye-i88w"/><path class="i-58-pnpd"/></g>`,
		"fallback": "iconmind:magnet-duotone-thin",
	});
}

export default Component;
