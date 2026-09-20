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
		"content": `<style>.b2n99wbku {
  d: path("M12 12.5v3");
}

.i211t9xib {
  fill: currentColor;
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nvygi8bzm {
  fill: currentColor;
  d: path("M11 18.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uy7nmfbhi {
  d: path("M11 18.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.ygr1bbcag {
  d: path("M8 9.5a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="i211t9xib"/><path class="nvygi8bzm"/><path class="xfs8wlfhn"/><path class="ygr1bbcag"/><path class="b2n99wbku"/><path class="uy7nmfbhi"/></g>`,
		"fallback": "iconmind:lock-alert-duotone-bold",
	});
}

export default Component;
