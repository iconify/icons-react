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
		"content": `<style>.c89wp8vtu {
  d: path("M2.5 14.75h19M12 9v11.5");
}

.djjiqhvra {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yixuwbcqc {
  fill: currentColor;
  d: path("M2.5 9V5.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2V9Z");
}
</style><g class="hntgybcog"><path class="djjiqhvra"/><path class="yixuwbcqc"/><path class="c89wp8vtu"/></g>`,
		"fallback": "uix:table-header",
	});
}

export default Component;
