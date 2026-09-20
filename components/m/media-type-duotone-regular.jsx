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

.bzbwtfbos {
  d: path("m10.5 11 3 3 -3 3Z");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wdauftxrx {
  fill: currentColor;
  d: path("m10.5 11 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="wdauftxrx"/><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="bzbwtfbos"/></g>`,
		"fallback": "iconmind:media-type-duotone-regular",
	});
}

export default Component;
