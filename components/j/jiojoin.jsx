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
		"content": `<style>.ax_gwxx1j {
  width: 30px;
  height: 22px;
  x: 3.57px;
  y: 10.62px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
}

.x6578jb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.57 25.541l7.92 4.573a1 1 0 0 0 1.5-.866V15.392a1 1 0 0 0-1.5-.866l-7.92 4.573m-15-4.479a3.394 3.394 0 1 1-3.394 3.394a3.394 3.394 0 0 1 3.394-3.394m0 8.44c3.772 0 6.789 1.057 6.789 2.316v3.244H11.78v-3.229c0-1.274 3.018-2.331 6.789-2.331Z");
}
</style><rect class="ax_gwxx1j"/><path class="x6578jb5s"/>`,
		"fallback": "arcticons:jiojoin",
	});
}

export default Component;
