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

.gcalxb98a {
  d: path("M8 13h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozrmsubaj {
  d: path("M9.5 11v4");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.r2fb1fafl {
  d: path("M14.5 11v4");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="gcalxb98a"/><path class="qtxvlht3c"/><path class="ozrmsubaj"/><path class="r2fb1fafl"/></g>`,
		"fallback": "iconmind:sentence-window-duotone-regular",
	});
}

export default Component;
