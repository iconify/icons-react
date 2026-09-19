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
		"content": `<style>.ixyzs4bsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.38 18.62a2.48 2.48 0 0 1 2.46 2.47h0m-2.46-4.37a4.27 4.27 0 0 1 4.29 4.25V21h0");
}

.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.sonn4pbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.38 14.89A6.12 6.12 0 0 1 39.5 21h0m-31 8.51v-8.58l4.29 8.58l4.3-8.58v8.58m10.01-8.58h5.72m-2.86 8.58v-8.58m-4.61 5.72a2.85 2.85 0 0 1-2.84 2.86h-.02h0a2.85 2.85 0 0 1-2.86-2.84v-2.88a2.85 2.85 0 0 1 2.84-2.86h.02a2.85 2.85 0 0 1 2.86 2.84v.02h0");
}
</style><path class="ixyzs4bsf"/><path class="sonn4pbtg"/><rect class="jc1oydeao"/>`,
		"fallback": "arcticons:mifareclassictool",
	});
}

export default Component;
