import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}

.t646xiboq {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m4.068 35L34 35.721V38h-4v-2.555a3.98 3.98 0 0 1-1.999-3.437L16 24.584L17.932 21L30 28.467V6h4v22.555A3.98 3.98 0 0 1 36 32c0 .058-.015.111-.017.168L38 33.416z");
}
</style><path class="t646xiboq"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:ten-oclock",
	});
}

export default Component;
