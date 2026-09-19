import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gi1cy2bkq {
  cx: 36.926px;
  cy: 20.838px;
  r: 1.186px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.jbt665b8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.272 20.113v7.84c0 .728.59 1.317 1.317 1.317h.395m-3.096-6.983h2.767m7.659 4.348a2.635 2.635 0 0 1-2.635 2.635h0a2.635 2.635 0 0 1-2.636-2.635v-1.713a2.635 2.635 0 0 1 2.635-2.635h0a2.635 2.635 0 0 1 2.636 2.635m0 4.348v-6.983m7.329 2.635a2.635 2.635 0 0 0-2.635-2.635h0a2.635 2.635 0 0 0-2.636 2.635v1.713a2.635 2.635 0 0 0 2.636 2.635h0a2.635 2.635 0 0 0 2.635-2.635m0 2.635V18.73m4.694 3.557a2.635 2.635 0 0 1 2.635 2.635v1.713a2.635 2.635 0 0 1-2.635 2.635h0a2.635 2.635 0 0 1-2.635-2.635v-1.713a2.635 2.635 0 0 1 2.635-2.635");
}
</style><path class="i9clfwm2k"/><path class="jbt665b8c"/><circle class="gi1cy2bkq"/>`,
		"fallback": "arcticons:tado",
	});
}

export default Component;
