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
		"content": `<style>.ifqwgccfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.697 28.582H24.65v13.744H6.697zm22.286-.137h12.32V42.5h-12.32zM7.742 5.5h12.474m-6.237 19.19V5.5m12.453 19.303V5.613l12.713 19.19V5.613");
}
</style><path class="ifqwgccfj"/>`,
		"fallback": "arcticons:ticketnunc",
	});
}

export default Component;
