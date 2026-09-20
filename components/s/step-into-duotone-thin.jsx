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
		"content": `<style>.bpo513kfk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hf_gtezns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ilxguy6uu {
  d: path("M12 4v10");
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.wlr6jzb8s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 11 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="hf_gtezns"/><path class="bpo513kfk"/><path class="wlr6jzb8s"/><path class="xyj-l9cjp"/><path class="ilxguy6uu"/><path class="mqnae981n"/></g>`,
		"fallback": "iconmind:step-into-duotone-thin",
	});
}

export default Component;
