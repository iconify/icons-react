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
		"content": `<style>.dznv025mt {
  d: path("M6 14h12");
}

.edr2cqsrt {
  d: path("M9.5 3 12 5.5 14.5 3");
}

.lfzh_fbfy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 3 12 5.5 14.5 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9-mlwb2l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 10h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.phjgeccqs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 14h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sz5hq9bxf {
  d: path("m9.5 21 2.5 -2.5 2.5 2.5");
}

.v9il_wb-q {
  d: path("M6 10h12");
}

.ys5fs9b-v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9.5 21 2.5 -2.5 2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="o9-mlwb2l"/><path class="phjgeccqs"/><path class="lfzh_fbfy"/><path class="ys5fs9b-v"/><path class="v9il_wb-q"/><path class="dznv025mt"/><path class="edr2cqsrt"/><path class="sz5hq9bxf"/></g>`,
		"fallback": "iconmind:prompt-compress-duotone-regular",
	});
}

export default Component;
