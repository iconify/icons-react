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
		"content": `<style>.bswhpn18z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 10v3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cm2xziy9r {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 7v10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpy_80lju {
  d: path("M3 3v18h8");
}

.kgzfjfb2m {
  d: path("M9 7v10h6");
}

.mglly3fuq {
  d: path("M15 10v3h4");
}

.yxziwvc_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="yxziwvc_g"/><path class="cm2xziy9r"/><path class="bswhpn18z"/><path class="hpy_80lju"/><path class="kgzfjfb2m"/><path class="mglly3fuq"/></g>`,
		"fallback": "iconmind:stack-trace-duotone-thin",
	});
}

export default Component;
