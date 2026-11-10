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
		"content": `<style>.hed5on_yp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.397 18.794v9.11c0 .72.583 1.302 1.302 1.302h.39m-5.935-10.412v9.11c0 .72.583 1.302 1.302 1.302h.39m19.415-1.313a2.603 2.603 0 0 1-4.865-1.29v-1.692a2.603 2.603 0 0 1 5.206 0v.846h-5.206m-2.891 2.136a2.603 2.603 0 0 1-4.865-1.29v-1.692a2.603 2.603 0 0 1 5.206 0v.846H25.64m-16.243-.846a2.603 2.603 0 0 1 5.207 0v1.692a2.603 2.603 0 0 1-5.207 0z");
}

.i-f81ybtw {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  rx: 4px;
  ry: 4px;
}
</style><rect class="i-f81ybtw"/><path class="hed5on_yp"/>`,
		"fallback": "arcticons:ollee",
	});
}

export default Component;
