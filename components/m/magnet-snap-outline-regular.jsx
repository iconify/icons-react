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
		"content": `<style>.cmb7dmbhv {
  d: path("M10 3v11");
}

.ek6w2ymjs {
  d: path("M6 3v11");
}

.hh2-r7bhw {
  d: path("M14 14a2 2 0 0 1 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olqp5-9mh {
  d: path("M14 3v11");
}

.sa7t2q-eb {
  d: path("M18 14a6 6 0 0 1 -12 0");
}

.w7htkxb5b {
  d: path("M18 3v11");
}
</style><g class="nrj6p8qat"><path class="sa7t2q-eb"/><path class="ek6w2ymjs"/><path class="w7htkxb5b"/><path class="hh2-r7bhw"/><path class="cmb7dmbhv"/><path class="olqp5-9mh"/></g>`,
		"fallback": "iconmind:magnet-snap-outline-regular",
	});
}

export default Component;
