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
		"content": `<style>.cncme659a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 22v-9L5 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eeoxujb4a {
  d: path("m14 11 5 -5");
}

.h-ljjxb1p {
  d: path("M12 22v-9L5 6");
}

.izmrq5b4m {
  d: path("M5 10.5V6h4.5");
}

.kp7w92boc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 11 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vi1za7buk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 10.5V6h4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cncme659a"/><path class="vi1za7buk"/><path class="kp7w92boc"/><path class="h-ljjxb1p"/><path class="izmrq5b4m"/><path class="eeoxujb4a"/></g>`,
		"fallback": "iconmind:keep-left-duotone-regular",
	});
}

export default Component;
