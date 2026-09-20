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
		"content": `<style>.a3zqh3bcj {
  d: path("M2 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.hpmnlabtt {
  d: path("M6 9h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s8g81lbzd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 9h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.umge8xb0s {
  fill: currentColor;
  d: path("M2 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wicgpi0ds {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M18 9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xdhl9rnnf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yg08zkbcc {
  d: path("M8 9v7");
}

.z8ypwnuvu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zmo9x5bsa {
  d: path("M18 9v7");
}
</style><g class="nrj6p8qat"><path class="umge8xb0s"/><path class="s8g81lbzd"/><path class="z8ypwnuvu"/><path class="wicgpi0ds"/><path class="xdhl9rnnf"/><path class="a3zqh3bcj"/><path class="hpmnlabtt"/><path class="yg08zkbcc"/><path class="zmo9x5bsa"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:push-up-duotone-regular",
	});
}

export default Component;
