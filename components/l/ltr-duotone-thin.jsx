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
		"content": `<style>.a2i99ybke {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ca8fh52yx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15.5 14.5 18 17l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ehxfnqbrv {
  d: path("M3 17h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rx4ch-ouz {
  d: path("M15.5 14.5 18 17l-2.5 2.5");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="yf_brbf0s"/><path class="a2i99ybke"/><path class="ca8fh52yx"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="ehxfnqbrv"/><path class="rx4ch-ouz"/></g>`,
		"fallback": "iconmind:ltr-duotone-thin",
	});
}

export default Component;
