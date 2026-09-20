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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pt-3kkb2k {
  d: path("M9 11h6");
}

.qr1iqpomq {
  d: path("M9 8h6");
}

.r3faxubne {
  d: path("M4 4v16");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="qr1iqpomq"/><path class="pt-3kkb2k"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:summary-metric-outline-thin",
	});
}

export default Component;
