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
		"content": `<style>.k5z_hc09s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.33 21.4l-2.7 2.6l2.6 2.6a4.08 4.08 0 0 0 .1-5.2m6.86 12.06c4.58-5.41 4.58-13.93 0-18.92M37 40.11c8.89-9.77 8.47-23.11 0-32.22");
}

.p2edr1bnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 35.75c-6-6.24-5.94-16.84 0-23.08m5 4.68c-3.74 4.26-3.84 9.25 0 13.72M18.76 22l1.87 2l-1.87 2c-1.15-1.27-1.15-2.52 0-4");
}
</style><path class="p2edr1bnu"/><path class="k5z_hc09s"/>`,
		"fallback": "arcticons:repeaterbook",
	});
}

export default Component;
