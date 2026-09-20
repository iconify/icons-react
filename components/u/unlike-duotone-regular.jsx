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
		"content": `<style>.amy-wzorq {
  fill: currentColor;
  d: path("M2 9a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c3lntibww {
  d: path("m22 9 -7 7");
}

.fk8qv-tpl {
  d: path("m15 9 7 7");
}

.lkje5bbsk {
  d: path("M2 9a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="amy-wzorq"/><path class="lkje5bbsk"/><path class="fk8qv-tpl"/><path class="c3lntibww"/></g>`,
		"fallback": "iconmind:unlike-duotone-regular",
	});
}

export default Component;
