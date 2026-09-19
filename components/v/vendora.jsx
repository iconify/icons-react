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
		"content": `<style>.gjp21stty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.254 9.481c14.746 0 26.502 16.425 19.392 28.74");
}

.heqd8ac2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.247 40.645l14.745-25.54a3.75 3.75 0 0 0-3.246-5.624H9.254a3.75 3.75 0 0 0-3.246 5.624l14.746 25.54a3.75 3.75 0 0 0 6.493 0");
}
</style><path class="heqd8ac2f"/><path class="gjp21stty"/>`,
		"fallback": "arcticons:vendora",
	});
}

export default Component;
