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
		"content": `<style>.cnwhnbbmh {
  d: path("M11 13a4 4 0 0 1 -8 0");
}

.d90oeycoz {
  d: path("M4 7a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u8eo2mbnw {
  fill: currentColor;
  d: path("M4 7a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ub1mcfbjy {
  d: path("M14 9h7");
}

.v90yymbhv {
  d: path("M14 14h7");
}

.yy6mapbcz {
  d: path("M14 19h4");
}
</style><g class="hntgybcog"><path class="u8eo2mbnw"/><path class="d90oeycoz"/><path class="cnwhnbbmh"/><path class="ub1mcfbjy"/><path class="v90yymbhv"/><path class="yy6mapbcz"/></g>`,
		"fallback": "iconmind:speech-to-text-duotone-thin",
	});
}

export default Component;
