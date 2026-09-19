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
		"content": `<style>.imp6rzktb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.4 4.5a2 2 0 0 1 2 2v19.1c0 6.88-10.398 17.9-16.4 17.9S7.6 32.48 7.6 25.6V6.5a2 2 0 0 1 2-2z");
}

.pnow9m1vw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.4 12.6L24 35.4l-7.4-22.8");
}
</style><path class="imp6rzktb"/><path class="pnow9m1vw"/>`,
		"fallback": "arcticons:varsity",
	});
}

export default Component;
