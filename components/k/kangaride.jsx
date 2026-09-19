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
		"content": `<style>.fs7qsobkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.875 27.783a1.838 1.838 0 1 1 .005-.001");
}

.rvp32eb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.737 19.448l-8.105 24l14.789.052l.263-10.579l8.421 1.263l3.263-3.158zm.947-2.159c4.876-3.15 6.608-6.525 4.58-12.789zm14.474-7.21c-.576 6.893-8.738 8.947-11.58 8.053z");
}
</style><path class="rvp32eb5i"/><path class="fs7qsobkn"/>`,
		"fallback": "arcticons:kangaride",
	});
}

export default Component;
