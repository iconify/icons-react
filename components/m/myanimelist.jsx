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
		"content": `<style>.lj3bt8fbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.04 19.303v9.394h4.697m-25.474-.011v-9.383l4.697 9.394l4.696-9.379v9.379m7.74-3.143h-4.095m-1.064 3.143l3.112-9.394l3.111 9.394");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="ydqthzbbt"/><path class="lj3bt8fbg"/>`,
		"fallback": "arcticons:myanimelist",
	});
}

export default Component;
