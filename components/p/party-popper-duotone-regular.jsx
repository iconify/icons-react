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
		"content": `<style>.j1bx6i80n {
  d: path("m12 6 3 -3");
}

.lqmxk7bjh {
  fill: currentColor;
  d: path("m3 21 8 -8c2 2 3 5 2 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rd9126b2a {
  d: path("m16 12 3 -3");
}

.rt0qgebuc {
  d: path("m14 9 3 -3");
}

.s_c1vbwpu {
  d: path("m3 21 8 -8c2 2 3 5 2 8Z");
}
</style><g class="nrj6p8qat"><path class="lqmxk7bjh"/><path class="s_c1vbwpu"/><path class="rt0qgebuc"/><path class="rd9126b2a"/><path class="j1bx6i80n"/></g>`,
		"fallback": "iconmind:party-popper-duotone-regular",
	});
}

export default Component;
