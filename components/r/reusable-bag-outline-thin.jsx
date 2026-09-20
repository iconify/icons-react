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

.t69363l7x {
  d: path("M6 8v13h12V8Z");
}

.v5slp2tuk {
  d: path("M6 8a3 3 0 0 1 6 0");
}

.vw-y0febs {
  d: path("M12 8a3 3 0 0 1 6 0");
}
</style><g class="hntgybcog"><path class="t69363l7x"/><path class="v5slp2tuk"/><path class="vw-y0febs"/></g>`,
		"fallback": "iconmind:reusable-bag-outline-thin",
	});
}

export default Component;
