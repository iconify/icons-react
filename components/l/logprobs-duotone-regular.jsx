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
		"content": `<style>.bpe5ncr9i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cxyu2ib7h {
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

.s1ajs51ib {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yy6zh0q6d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zc6ogu6ot {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="s1ajs51ib"/><path class="bpe5ncr9i"/><path class="zc6ogu6ot"/><path class="yy6zh0q6d"/><path class="mg7aqnbsf"/><path class="it88l1wbh"/><path class="nbib5l08z"/><path class="cxyu2ib7h"/></g>`,
		"fallback": "iconmind:logprobs-duotone-regular",
	});
}

export default Component;
