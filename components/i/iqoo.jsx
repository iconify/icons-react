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
		"content": `<style>.al3unxbvy {
  cx: 5.275px;
  cy: 20.388px;
  r: 0.75px;
  fill: currentColor;
}

.ckkokpb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.103 24.254a4.133 4.133 0 1 1-8.266 0a4.133 4.133 0 0 1 8.266 0m12.397 0a4.133 4.133 0 1 1-8.265 0a4.133 4.133 0 0 1 8.265 0m-28.337.59l3.542 3.439m-4.133.103a4.133 4.133 0 1 1 4.133-4.132");
}

.rc7da6b_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.275 23.221v5.166");
}
</style><path class="rc7da6b_o"/><circle class="al3unxbvy"/><path class="ckkokpb3f"/>`,
		"fallback": "arcticons:iqoo",
	});
}

export default Component;
