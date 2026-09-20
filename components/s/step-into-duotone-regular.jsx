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
		"content": `<style>.ex75cacie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ilxguy6uu {
  d: path("M12 4v10");
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.nlbl3ystz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}

.zo_l4ub5r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 11 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ex75cacie"/><path class="nlbl3ystz"/><path class="zo_l4ub5r"/><path class="xyj-l9cjp"/><path class="ilxguy6uu"/><path class="mqnae981n"/></g>`,
		"fallback": "iconmind:step-into-duotone-regular",
	});
}

export default Component;
