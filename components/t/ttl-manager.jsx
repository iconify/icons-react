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
		"content": `<style>.hrja6r4yb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.215 21.738h23.504a2.72 2.72 0 0 1 2.721 2.722v16.318a2.72 2.72 0 0 1-2.72 2.722H13.215a2.72 2.72 0 0 1-2.722-2.722V24.46a2.72 2.72 0 0 1 2.722-2.722m9.338 16.935l3.63-12.096");
}

.jpy-7jb7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.134 27.786l-4.839 4.839l4.839 4.839m8.468 0l6.048-4.839l-6.048-4.839m-18.206 1.936a1.694 1.694 0 1 1 0-3.375m7.319-4.609v-3.63M32.23 21.69V10.85c0-8.467-14.515-8.467-14.515 0v2.42");
}
</style><path class="hrja6r4yb"/><path class="jpy-7jb7w"/>`,
		"fallback": "arcticons:ttl-manager",
	});
}

export default Component;
