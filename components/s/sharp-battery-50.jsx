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
		"content": `<style>.e850otbxv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v9h10z");
}

.t-y0e6kia {
  fill: currentColor;
  d: path("M7 13v9h10v-9z");
}
</style><path class="e850otbxv"/><path class="t-y0e6kia"/>`,
		"fallback": "ic:sharp-battery-50",
	});
}

export default Component;
