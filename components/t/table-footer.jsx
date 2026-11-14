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
		"content": `<style>.djjiqhvra {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5");
}

.gdat5nb5a {
  d: path("M2.5 9.25h19M12 3.5V15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rc8yv697l {
  fill: currentColor;
  d: path("M2.5 15v3.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V15Z");
}
</style><g class="hntgybcog"><path class="djjiqhvra"/><path class="rc8yv697l"/><path class="gdat5nb5a"/></g>`,
		"fallback": "uix:table-footer",
	});
}

export default Component;
