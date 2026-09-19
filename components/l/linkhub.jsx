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
		"content": `<style>.kgzy90zig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.865 12.73l3.942-3.942a8.781 8.781 0 0 1 12.405 12.404l-5.635 5.615a8.74 8.74 0 0 1-12.362.023l-.023-.023");
}

.lj5zyhubt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.135 35.27l-3.942 3.942A8.781 8.781 0 0 1 8.788 26.808l5.635-5.615a8.74 8.74 0 0 1 12.362-.023l.023.023");
}
</style><path class="kgzy90zig"/><path class="lj5zyhubt"/>`,
		"fallback": "arcticons:linkhub",
	});
}

export default Component;
