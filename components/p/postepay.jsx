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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.vc2kcclsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.148 24.608c-.387 2.197 1.08 3.978 3.276 3.978h0c2.197 0 4.292-1.781 4.68-3.978l.456-2.586c.387-2.196-1.08-3.977-3.277-3.977h0c-2.197 0-4.291 1.78-4.679 3.977m.701-3.977L13.5 33.955m12.527-9.347c-.388 2.197 1.08 3.978 3.276 3.978h0c2.197 0 4.292-1.781 4.68-3.978l.455-2.586c.387-2.196-1.08-3.977-3.276-3.977h0c-2.197 0-4.292 1.78-4.68 3.977m.702-3.977l-2.806 15.91");
}
</style><path class="i9clfwm2k"/><path class="vc2kcclsc"/>`,
		"fallback": "arcticons:postepay",
	});
}

export default Component;
