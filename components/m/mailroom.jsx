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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qwcbznl5f {
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V4A1.5 1.5 0 0 1 4 2.5m8 0v19M2.5 12h19");
}

.xciiyzblg {
  d: path("M12 2.5L16.75 7l4.75-4.5");
}
</style><g class="hntgybcog"><path class="qwcbznl5f"/><path class="xciiyzblg"/></g>`,
		"fallback": "uix:mailroom",
	});
}

export default Component;
