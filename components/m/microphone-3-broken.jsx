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
		"content": `<style>.dqh2e367l {
  d: path("M10 11L14 11");
}

.fd641zcer {
  d: path("M11 8H13");
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
</style><g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="fd641zcer"/><path class="dqh2e367l"/><path class="gcs2nkswg"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:microphone-3-broken",
	});
}

export default Component;
