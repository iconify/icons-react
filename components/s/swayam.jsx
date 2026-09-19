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
		"content": `<style>.akgtkvahg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.97 36.47C10.083 36.47 4.5 30.887 4.5 24s5.583-12.47 12.47-12.47h14.06c6.887 0 12.47 5.583 12.47 12.47s-5.583 12.47-12.47 12.47zm2.701-24.94v24.94m0-12.47H4.5");
}
</style><path class="akgtkvahg"/>`,
		"fallback": "arcticons:swayam",
	});
}

export default Component;
