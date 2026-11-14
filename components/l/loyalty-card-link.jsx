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
		"content": `<style>.cid3i0bxr {
  d: path("m15.995 16.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.ctm2ktb5d {
  d: path("M9.2 20H2.5V4h19v6.7m0 8.9v.4h-.4");
}

.enuzerbiy {
  fill: currentColor;
  d: path("m8.75 6.25l1.176 2.882l3.104.227l-2.378 2.009l.743 3.023L8.75 12.75l-2.645 1.641l.743-3.023L4.47 9.359l3.104-.227Z");
}

.q-629cb-d {
  d: path("m12.995 19.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctm2ktb5d"/><path class="enuzerbiy"/><path class="q-629cb-d"/><path class="cid3i0bxr"/></g>`,
		"fallback": "uix-sharp:loyalty-card-link",
	});
}

export default Component;
