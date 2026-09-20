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
		"content": `<style>.c27cgq4un {
  d: path("M18 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jy2rzibrh {
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.loxcusk2q {
  d: path("M2 21a7 7 0 0 1 14 0");
}

.ou_6febrd {
  d: path("M14 8a4 4 0 0 1 8 0");
}

.vdkk_bbqh {
  fill: currentColor;
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="vdkk_bbqh"/><path class="jy2rzibrh"/><path class="loxcusk2q"/><path class="ou_6febrd"/><path class="c27cgq4un"/></g>`,
		"fallback": "iconmind:tour-guide-duotone-thin",
	});
}

export default Component;
