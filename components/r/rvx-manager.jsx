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
		"content": `<style>.kr2ugpbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.427 25.759l8.477-6.076c3.496-2.472 3.462-6.224-.238-8.426l-9.857-5.985c-3.7-2.194-8.293.548-8.293 4.944v14.835");
}

.qtjnscbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.515 39.767v-15.62c0-3.52 4.416-5.088 6.63-2.362L32.84 37.413c1.98 2.437.243 6.087-2.894 6.087H17.25a3.734 3.734 0 0 1-3.735-3.734z");
}
</style><path class="kr2ugpbzl"/><path class="qtjnscbaa"/>`,
		"fallback": "arcticons:rvx-manager",
	});
}

export default Component;
