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
		"content": `<style>.er6s1rc2j {
  d: path("m15 11 2 -2 -2 -2");
}

.j4ecinbzh {
  d: path("m9 11 2 -2 -2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}
</style><g class="nrj6p8qat"><path class="quu8uycwi"/><path class="j4ecinbzh"/><path class="er6s1rc2j"/></g>`,
		"fallback": "iconmind:prewarm-pool-outline-regular",
	});
}

export default Component;
