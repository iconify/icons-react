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
		"content": `<style>.o44z5id4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.5v-23c0-2.2-1.8-4-4-4h-31c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h31c2.2 0 4-1.8 4-4");
}

.vae1fmq-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.5 39.5c2.2 0 4.2-.8 6-2c1.6-1.2 2.9-2.7 3.8-4.5s1.7-3.6 2.2-5.5c.7-2.3 1.1-4.7 2-7c.8-2.3 2.2-4.4 4-6c1.7-1.3 3.8-2 6-2m-39 23c2.2 0 4.2-.8 6-2c1.6-1.2 2.9-2.7 3.8-4.5s1.7-3.6 2.2-5.5c.7-2.3 1.1-4.7 2-7c.8-2.3 2.2-4.4 4-6c1.7-1.3 3.8-2 6-2");
}
</style><path class="o44z5id4x"/><path class="vae1fmq-b"/>`,
		"fallback": "arcticons:smartcontrol",
	});
}

export default Component;
