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
		"content": `<style>.ds64m8b6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.906 24.396c8.742-7.525 19.991-5.824 26.513.94m-19.423 6.192c4.482-4.02 9.279-2.995 12.93.491");
}

.ffx0q340q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 17.307c8.836-8.026 26.72-11.58 39 1.091L24.177 37.936");
}
</style><path class="ffx0q340q"/><path class="ds64m8b6c"/>`,
		"fallback": "arcticons:netgear-nighthawk",
	});
}

export default Component;
