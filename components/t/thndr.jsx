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
		"content": `<style>.n74y6fbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.812 11.552h12.885s.702.288.532.923c-.318 1.234-1.122 3.032-1.335 3.865c.255.137 11.606 0 11.606 0l-20.513 9.593l1.63-4.243s-.13-.513-1.097-.513h-7.152");
}

.ozg0ggbju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.305 8.132L4.52 39.868a.297.297 0 0 0 .173.381a.3.3 0 0 0 .104.02H8.76a.61.61 0 0 0 .574-.4L21.077 8.134a.297.297 0 0 0-.277-.4l-3.92-.003a.61.61 0 0 0-.574.4Z");
}
</style><path class="ozg0ggbju"/><path class="n74y6fbqo"/>`,
		"fallback": "arcticons:thndr",
	});
}

export default Component;
