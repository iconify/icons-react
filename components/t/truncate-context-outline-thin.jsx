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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.e8jn04z9j {
  d: path("M9 15h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="hntgybcog"><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="jlfjgzbqx"/><path class="x1_r36phd"/><path class="e8jn04z9j"/></g>`,
		"fallback": "iconmind:truncate-context-outline-thin",
	});
}

export default Component;
