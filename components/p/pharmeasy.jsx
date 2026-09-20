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
		"content": `<style>.oe6vfdbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.098 22.587l13.89-13.89c4.263-4.262 11.173-4.262 15.435 0s4.262 11.172 0 15.434l4.479 4.478");
}

.tnxa35f2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.722 32.211l6.9-6.9L33.911 35.6l-6.9 6.9");
}
</style><path class="tnxa35f2s"/><path class="oe6vfdbtt"/>`,
		"fallback": "arcticons:pharmeasy",
	});
}

export default Component;
