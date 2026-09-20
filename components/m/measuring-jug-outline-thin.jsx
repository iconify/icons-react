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
		"content": `<style>.did41pbsp {
  d: path("m15 7 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jvpl-4ewk {
  d: path("M15 10c4 0 4 6 0 6");
}

.lymn1951z {
  d: path("M6 12h4");
}

.rsteb5bse {
  d: path("M5 6v14h10V6");
}

.twn25-b-k {
  d: path("M6 16h4");
}
</style><g class="hntgybcog"><path class="rsteb5bse"/><path class="did41pbsp"/><path class="jvpl-4ewk"/><path class="lymn1951z"/><path class="twn25-b-k"/></g>`,
		"fallback": "iconmind:measuring-jug-outline-thin",
	});
}

export default Component;
