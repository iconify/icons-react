import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gyj9v_mhe {
  fill: currentColor;
  d: path("M18 20.998H6v-2h12z");
}

.j6tc2ab-f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z");
}
</style><path class="j6tc2ab-f"/><path class="gyj9v_mhe"/>`,
		"fallback": "ic:twotone-greater-than-equal",
	});
}

export default Component;
