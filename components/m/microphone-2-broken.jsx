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
		"content": `<style>.abaosiy3n {
  d: path("M7 11L9 11");
}

.fpr1n1b3q {
  d: path("M7 8L9 8");
}

.gcs2nkswg {
  d: path("M20 10V11C20 14.012 18.3354 16.6353 15.876 18M4 10V11C4 15.4183 7.58172 19 12 19");
}

.guj5ndblb {
  d: path("M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.obcs1cbgf {
  d: path("M12 19V22");
}

.x-22ajbkr {
  d: path("M13.5 8L17 8");
}

.zqljambho {
  d: path("M13.5 11L17 11");
}
</style><g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="x-22ajbkr"/><path class="zqljambho"/><path class="fpr1n1b3q"/><path class="abaosiy3n"/><path class="obcs1cbgf"/><path class="gcs2nkswg"/></g>`,
		"fallback": "solar:microphone-2-broken",
	});
}

export default Component;
