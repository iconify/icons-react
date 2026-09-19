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
		"content": `<style>.cx-5rf6kc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.423 14.79l-.077 6.043c-.558 4.265-3.388 7.401-7.08 7.608H27.72c-8.389 0-8.572-.01-9.959-.57c-1.813-.732-4.102-2.832-4.93-4.523c-2.615-5.345-.012-11.343 5.686-13.104c1.464-.452 2.3-.482 13.273-.482H43.5z");
}

.lq_4-nucw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.577 33.21l.077-6.043c.558-4.265 3.388-7.401 7.08-7.608h8.546c8.389 0 8.572.01 9.959.57c1.813.732 4.102 2.832 4.93 4.523c2.615 5.345.012 11.343-5.686 13.104c-1.464.452-2.3.482-13.273.482H4.5z");
}
</style><path class="lq_4-nucw"/><path class="cx-5rf6kc"/>`,
		"fallback": "arcticons:spruce",
	});
}

export default Component;
