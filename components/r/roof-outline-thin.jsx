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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kc2e0qvxl {
  d: path("M2 18 12 8l10 10Z");
}

.utcr20lug {
  d: path("M12 13v5");
}
</style><g class="hntgybcog"><path class="kc2e0qvxl"/><path class="cfd43lbgp"/><path class="utcr20lug"/></g>`,
		"fallback": "iconmind:roof-outline-thin",
	});
}

export default Component;
