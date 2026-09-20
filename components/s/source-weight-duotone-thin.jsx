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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qol-hlb1i {
  d: path("m8.5 17 3.5 -3.5 3.5 3.5Z");
}

.wxxwsebsq {
  fill: currentColor;
  d: path("m8.5 17 3.5 -3.5 3.5 3.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="wxxwsebsq"/><path class="abnm6smsv"/><path class="qol-hlb1i"/></g>`,
		"fallback": "iconmind:source-weight-duotone-thin",
	});
}

export default Component;
