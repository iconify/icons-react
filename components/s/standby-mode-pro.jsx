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
		"content": `<style>.ll437zb-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.91 22.637v2.722m5.692-4.559l4.105 3.213l3.681-3.25m2.93 3.235a6.65 6.65 0 0 1-6.653 6.645h0c-3.674 0-6.652-2.975-6.652-6.645s2.978-6.645 6.652-6.645s6.653 2.975 6.653 6.645m4.875 2.037h8.376m-8.376-2.967h8.376m-8.466-5.624h8.553a1.93 1.93 0 0 1 1.936 1.92v9.257a1.93 1.93 0 0 1-1.92 1.935h-8.566a1.93 1.93 0 0 1-1.935-1.92v-9.261a1.93 1.93 0 0 1 1.924-1.931h.012zm-21.22-2.876h32.234a3.374 3.374 0 0 1 3.383 3.379V30.05a3.38 3.38 0 0 1-3.383 3.382H7.883A3.375 3.375 0 0 1 4.5 30.065V17.947a3.374 3.374 0 0 1 3.383-3.38");
}
</style><path class="ll437zb-f"/>`,
		"fallback": "arcticons:standby-mode-pro",
	});
}

export default Component;
