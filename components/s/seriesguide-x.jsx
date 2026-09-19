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
		"content": `<style>.hb12o5ccu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 10.5h-31c-2.21 0-4 1.79-4 4v19c0 2.21 1.79 4 4 4h31c2.21 0 4-1.79 4-4v-19c0-2.21-1.79-4-4-4m0 17.7l-4 5.3m4 0l-4-5.3");
}

.ro42ztv1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35 16.87L20.36 31.51s-7.24-7.18-7.32-7.18");
}
</style><path class="ro42ztv1t"/><path class="hb12o5ccu"/>`,
		"fallback": "arcticons:seriesguide-x",
	});
}

export default Component;
