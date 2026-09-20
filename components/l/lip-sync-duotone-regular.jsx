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
		"content": `<style>.fijjj9b9u {
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
}

.iprvt7beg {
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
}

.ktqguibjo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.swbedxnvn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w1tghrmcy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydk-7sp0t {
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
}
</style><g class="nrj6p8qat"><path class="w1tghrmcy"/><path class="swbedxnvn"/><path class="ktqguibjo"/><path class="ydk-7sp0t"/><path class="iprvt7beg"/><path class="fijjj9b9u"/></g>`,
		"fallback": "iconmind:lip-sync-duotone-regular",
	});
}

export default Component;
