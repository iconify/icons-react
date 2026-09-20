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
		"content": `<style>.he-6-nbhf {
  d: path("M14 3v6l6 6v6");
}

.jo523lbcw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lv_jsmtqq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 3v6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nq6698b_y {
  d: path("M4 3v6l6 6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jo523lbcw"/><path class="lv_jsmtqq"/><path class="nq6698b_y"/><path class="he-6-nbhf"/></g>`,
		"fallback": "iconmind:river-duotone-regular",
	});
}

export default Component;
