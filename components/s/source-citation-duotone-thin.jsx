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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.ak_t1bcfw {
  d: path("M14 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.dk412jbfb {
  d: path("M8 17h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lyaz9_5wc {
  d: path("M8 13h6");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.uvugsybla {
  fill: currentColor;
  d: path("M14 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="uvugsybla"/><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="lyaz9_5wc"/><path class="ak_t1bcfw"/><path class="dk412jbfb"/></g>`,
		"fallback": "iconmind:source-citation-duotone-thin",
	});
}

export default Component;
