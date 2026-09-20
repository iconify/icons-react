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
		"content": `<style>.bppolvb1n {
  fill: currentColor;
  d: path("M12 4c3.5 0 6 2.5 6 6s-2.5 6 -6 6 -6 -2.5 -6 -6 2.5 -6 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c9x5rubht {
  d: path("M12 16c0 2 2 3 1 5");
}

.emoq9e-ad {
  d: path("M12 4c3.5 0 6 2.5 6 6s-2.5 6 -6 6 -6 -2.5 -6 -6 2.5 -6 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bppolvb1n"/><path class="emoq9e-ad"/><path class="c9x5rubht"/></g>`,
		"fallback": "iconmind:party-balloon-duotone-thin",
	});
}

export default Component;
