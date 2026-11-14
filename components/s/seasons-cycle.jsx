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
		"content": `<style>.fj87c9bsl {
  d: path("M12 4.5a8 8 0 1 0 7 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcnkrebpi {
  d: path("m10 2.5l2 2l-2 2m-1 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="fj87c9bsl"/><path class="xcnkrebpi"/></g>`,
		"fallback": "uix:seasons-cycle",
	});
}

export default Component;
