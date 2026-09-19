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
		"content": `<style>.jn63cbcie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.487 42.5v-37H19.245v37M42.5 5.5h-9.013");
}

.zv219ab7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.245 5.5h-2.929a10.816 10.816 0 0 0 0 21.632h2.93");
}
</style><path class="jn63cbcie"/><path class="zv219ab7c"/>`,
		"fallback": "arcticons:press",
	});
}

export default Component;
