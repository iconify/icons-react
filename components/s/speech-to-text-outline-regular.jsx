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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
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
</style><g class="nrj6p8qat"><path class="d90oeycoz"/><path class="cnwhnbbmh"/><path class="ub1mcfbjy"/><path class="v90yymbhv"/><path class="yy6mapbcz"/></g>`,
		"fallback": "iconmind:speech-to-text-outline-regular",
	});
}

export default Component;
