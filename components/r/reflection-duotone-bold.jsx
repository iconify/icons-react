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
		"content": `<style>.jneqgebdj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 15v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k3x4ygb5y {
  d: path("M15.5 5.94a7 7 0 0 1 0 12.12");
}

.o07pt7i5a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 5.94a7 7 0 0 1 0 12.12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r_je2bdjk {
  d: path("M12 4v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.swsklrb8d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.5 18.06a7 7 0 0 1 0 -12.12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uverd3z0e {
  d: path("M8.5 18.06a7 7 0 0 1 0 -12.12");
}

.v35zavq1z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyf3o9drf {
  d: path("M12 15v5");
}
</style><g class="s0phu2bbs"><path class="swsklrb8d"/><path class="o07pt7i5a"/><path class="v35zavq1z"/><path class="jneqgebdj"/><path class="uverd3z0e"/><path class="k3x4ygb5y"/><path class="r_je2bdjk"/><path class="xyf3o9drf"/></g>`,
		"fallback": "iconmind:reflection-duotone-bold",
	});
}

export default Component;
