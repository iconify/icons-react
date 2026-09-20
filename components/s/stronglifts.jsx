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
		"content": `<style>.am4unmbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.388 28.937c.897.747 1.645 1.047 3.59 1.047h.448a3.96 3.96 0 0 0 3.89-3.89a3.96 3.96 0 0 0-3.89-3.89h-4.039v-4.188h7.929m7.441 10.921c.898.747 1.646 1.047 3.59 1.047h.449a3.96 3.96 0 0 0 3.89-3.89a3.96 3.96 0 0 0-3.89-3.89h-4.039v-4.188h7.928");
}

.czsvox3po {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.438 22.095l-2.876 3.81m2.876 0l-2.876-3.81m9.324-18.167a21.64 21.64 0 0 1 13.195 24.078c-2.193 14.707-21.224 22.619-33.196 13.8c-12.666-7.79-12.471-28.4.34-35.948l3.774-1.944");
}
</style><path class="czsvox3po"/><path class="am4unmbro"/>`,
		"fallback": "arcticons:stronglifts",
	});
}

export default Component;
