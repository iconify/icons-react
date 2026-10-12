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
		"content": `<style>.kfr5ppb5y {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17h.01");
}

.o1bxzhbjl {
  width: 13px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.t7h2ldpuh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7h6.5M7 10h6.5M7 13h3m2.75 4c1.2-1.6 2.7-2.5 4.25-2.5s3.05.9 4.25 2.5c-1.2 1.6-2.7 2.5-4.25 2.5s-3.05-.9-4.25-2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="o1bxzhbjl"/><path class="t7h2ldpuh"/><path class="kfr5ppb5y"/></g>`,
		"fallback": "iconoven:privacy-policy",
	});
}

export default Component;
