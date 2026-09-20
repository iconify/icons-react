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
		"content": `<style>.dwto70uro {
  d: path("M15 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nonq38brg {
  d: path("M18 13v3.5");
}

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.qx40f8bin {
  fill: currentColor;
  d: path("M15 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="qx40f8bin"/><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="dwto70uro"/><path class="nonq38brg"/></g>`,
		"fallback": "iconmind:tab-pin-duotone-thin",
	});
}

export default Component;
