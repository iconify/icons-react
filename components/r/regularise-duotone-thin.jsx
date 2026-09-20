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
		"content": `<style>.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqi_aabed {
  d: path("m3 15 5 -5 5 5 5 -5");
}

.jik6spbcf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 15 5 -5 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="jik6spbcf"/><path class="earhjk-cy"/><path class="iqi_aabed"/><path class="xgrfb-bqu"/></g>`,
		"fallback": "iconmind:regularise-duotone-thin",
	});
}

export default Component;
