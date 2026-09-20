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
		"content": `<style>.e8vupfb9c {
  d: path("M9.5 14h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ptaeireto {
  d: path("M12 11.5v5");
}

.q_br9pbky {
  d: path("M8 8V4h8v4");
}

.t69363l7x {
  d: path("M6 8v13h12V8Z");
}

.yerw84_9m {
  fill: currentColor;
  d: path("M6 8v13h12V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yerw84_9m"/><path class="t69363l7x"/><path class="q_br9pbky"/><path class="ptaeireto"/><path class="e8vupfb9c"/></g>`,
		"fallback": "iconmind:pill-bottle-duotone-regular",
	});
}

export default Component;
