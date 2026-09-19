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
		"content": `<style>.if99uebaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5M24 8A16.06 16.06 0 0 0 8 24h0m16-10.38A10.38 10.38 0 0 0 13.62 24h0M24 17.86A6.14 6.14 0 1 1 17.86 24A6.14 6.14 0 0 1 24 17.86m0 16.52A10.38 10.38 0 0 0 34.38 24h0M24 40.05a16.06 16.06 0 0 0 16-16h0");
}
</style><path class="if99uebaz"/>`,
		"fallback": "arcticons:vinyl",
	});
}

export default Component;
