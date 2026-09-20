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
		"content": `<style>.d43w9ob6g {
  fill: currentColor;
  d: path("M12 17.5a2.5 2.5 0 0 1 2.5 -2.5h4a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-4a2.5 2.5 0 0 1 -2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.xprtucb6d {
  d: path("m10 10 4.5 4.5");
}

.z8dv2-h-v {
  d: path("M12 17.5a2.5 2.5 0 0 1 2.5 -2.5h4a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-4a2.5 2.5 0 0 1 -2.5 -2.5");
}
</style><g class="hntgybcog"><path class="d43w9ob6g"/><path class="skbifdbcx"/><path class="xprtucb6d"/><path class="z8dv2-h-v"/></g>`,
		"fallback": "iconmind:task-claim-duotone-thin",
	});
}

export default Component;
