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
		"content": `<style>.h3nm9fb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.303 37.463l25.069-6.172a4.11 4.11 0 0 0 2.784-5.63l-3.378-7.753a7.91 7.91 0 0 0-6.405-4.705l-25.86-2.785a2.72 2.72 0 0 0-2.93 3.367l5.1 20.296a4.65 4.65 0 0 0 5.62 3.382");
}

.np---dzum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.977 18.577l11.549 3.31l-9.05 7.024");
}
</style><path class="h3nm9fb1f"/><path class="np---dzum"/>`,
		"fallback": "arcticons:pure-tuber",
	});
}

export default Component;
