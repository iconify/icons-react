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
		"content": `<style>.h1re0pbai {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 10 -4 4h3l-4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9hgspbqe {
  d: path("M6 4v3");
}

.nr7_9-b_h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r_3la5bqy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w2flskbzg {
  d: path("m15 10 -4 4h3l-4 4");
}

.wb0w7r_ye {
  d: path("M9.5 4v3");
}
</style><g class="hntgybcog"><path class="nr7_9-b_h"/><path class="r_3la5bqy"/><path class="h1re0pbai"/><path class="i9hgspbqe"/><path class="wb0w7r_ye"/><path class="w2flskbzg"/></g>`,
		"fallback": "iconmind:trigger-phrase-duotone-thin",
	});
}

export default Component;
