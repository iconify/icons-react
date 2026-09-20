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
		"content": `<style>.jhi1s7bxb {
  d: path("m15 5 3 -3 3 3");
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.on_ehobtw {
  d: path("M18 7V2");
}

.wqwx994ue {
  d: path("M14 10v10");
}
</style><g class="nrj6p8qat"><path class="mh_3yqm3z"/><path class="wqwx994ue"/><path class="on_ehobtw"/><path class="jhi1s7bxb"/></g>`,
		"fallback": "iconmind:level-up-outline-regular",
	});
}

export default Component;
