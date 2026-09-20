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
		"content": `<style>.hljhthw1y {
  d: path("M8.5 12h3");
}

.jxjonebqo {
  d: path("M8.5 9v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ogtwkzbca {
  d: path("M22 9.5h-7v5h7");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x97gz5ilw {
  d: path("M5.5 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="vyks9vbfn"/><path class="ogtwkzbca"/><path class="x97gz5ilw"/><path class="jxjonebqo"/><path class="hljhthw1y"/></g>`,
		"fallback": "iconmind:spend-category-outline-regular",
	});
}

export default Component;
