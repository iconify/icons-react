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
		"content": `<style>.o61gxbl0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 36.059L24 5.912l20.5 30.147Z");
}

.u7btjpbtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 5.912l6.612 3.617l12.682 32.56l-36.176-2.413L3.5 36.06m3.618 3.617L30.612 9.528m12.682 32.56l1.206-6.03");
}
</style><path class="o61gxbl0j"/><path class="u7btjpbtz"/>`,
		"fallback": "arcticons:photoprism",
	});
}

export default Component;
