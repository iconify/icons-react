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
		"content": `<style>.bqx6nzbab {
  d: path("M3.25 6.5a8.75 2.75 0 0 0 17.5 0M12 13.75v3m0 0l-4.5 4.5m4.5-4.5l4.5 4.5");
}

.gucq9y9uj {
  d: path("M3.25 6.5a8.75 2.75 0 0 1 17.5 0V11c0 1.5-3.9 2.75-8.75 2.75S3.25 12.5 3.25 11Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gucq9y9uj"/><path class="bqx6nzbab"/></g>`,
		"fallback": "iconoven:snare-drum",
	});
}

export default Component;
