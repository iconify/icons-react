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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gmsx4sbfw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 6 5 5 4 4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uczqj4pud {
  d: path("m6 6 5 5 4 4h5");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="gmsx4sbfw"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="uczqj4pud"/></g>`,
		"fallback": "iconmind:loss-curve-duotone-bold",
	});
}

export default Component;
