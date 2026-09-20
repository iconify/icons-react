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
		"content": `<style>.d-ycm7dex {
  d: path("m3 9 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qxefuzamf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 9 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rgbemnl3g {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 21h5v-5h5v-5h5V6h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tw1khnbtv {
  d: path("M3 21h5v-5h5v-5h5V6h3");
}
</style><g class="nrj6p8qat"><path class="qxefuzamf"/><path class="rgbemnl3g"/><path class="d-ycm7dex"/><path class="tw1khnbtv"/></g>`,
		"fallback": "iconmind:quantize-4bit-duotone-regular",
	});
}

export default Component;
