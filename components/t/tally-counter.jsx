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
		"content": `<style>.d1mbm7oaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.3 8.5v31m7.8-31v31m7.8-31v31m7.8-31v31M4.5 26.667l39-8.367");
}
</style><path class="d1mbm7oaz"/>`,
		"fallback": "arcticons:tally-counter",
	});
}

export default Component;
