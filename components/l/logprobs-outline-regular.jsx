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
		"content": `<style>.cxyu2ib7h {
  d: path("M17 7v12");
}

.it88l1wbh {
  d: path("M7 7v10");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nbib5l08z {
  d: path("M12 7v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mg7aqnbsf"/><path class="it88l1wbh"/><path class="nbib5l08z"/><path class="cxyu2ib7h"/></g>`,
		"fallback": "iconmind:logprobs-outline-regular",
	});
}

export default Component;
